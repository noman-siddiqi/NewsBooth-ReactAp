import React, { Component } from "react";
import NewItems from "./NewItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 5,
        category: "general",
};

static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
constructor(props) {
    super(props);
    this.state = {
    articles: [],
    loading: true,
    page: 1,
    totalResults: 0,
    };
    document.title = this.capitalizeFirstLetter(this.props.category) + " News";
}

async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();
    this.props.setProgress(30);
    this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
    });
    this.props.setProgress(100);
}
fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
        articles: this.state.articles.concat(data.articles),
        totalResults: data.totalResults,
        loading: false
    });
};

async componentDidMount() {
    this.updateNews();
}

capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

render() {
    return (
    <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0px" }}>
        {" "}
        News Booth - Top {this.capitalizeFirstLetter(
            this.props.category
        )}{" "}
        Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.length !== this.state.totalResults}
        loader={<Spinner />}>
        <div className="row">
            {this.state.articles.map((article) => {
                return (
                <div className="col-md-4" key={article.url}>
                    <NewItems
                    title={article.title}
                    description={article.description}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    publishedAt={article.publishedAt}
                    sourceName={article.source.name}
                    />
                </div>
                );
                })}
        </div>
        </InfiniteScroll>
    </div>
    );
}
}

export default News;
