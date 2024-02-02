import React, { Component } from "react";
import NewItems from "./NewItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country: 'us',
        pageSize: 5,
        category: 'general'
    }  
    
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.state = {
        articles: [], 
        loading: false,
        page: 1
        };
        document.title = this.capitalizeFirstLetter(this.props.category) + ' News';
    }

    async updateNews(){
        this.setState({loading: true});
        const url = `https://newsapi.org/v2/top-headlines?country=ca&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let response = await fetch(url);
        let data = await response.json();
    
        this.setState({
            articles: data.articles,
            totalResults: data.totalResults,
            loading: false
        });
    }
    handleNextPage = async () => {  
        this.setState({page: this.state.page + 1});
        this.updateNews();
    }
    handlePreviousPage = async () => {
        this.setState({page: this.state.page - 1});
        this.updateNews();
    }

    async componentDidMount() {
        this.updateNews();
    }

    capitalizeFirstLetter = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        return (
        <div className="container my-3">
            <h1 className="text-center" style={{margin: '35px 0px'}} > News Booth - Top {
                (this.capitalizeFirstLetter(this.props.category))
            } Headlines</h1>
            {this.state.loading && <Spinner />}
            <div className="row">
            {!this.state.loading && this.state.articles.map((article) => {
                return <div className="col-md-4" key={article.url}>
                <NewItems
                    title={article.title}
                    description={article.description}
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    publishedAt={article.publishedAt}
                    sourceName= {article.source.name}
                />
                </div>
        })}
            </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <=1} className="btn btn-dark" type="button" onClick={this.handlePreviousPage}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark position-relative" type="button" onClick={this.handleNextPage}>Next &rarr;
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {this.state.totalResults}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    </button>
                </div>    
        </div>
        );
    }
}

export default News;
