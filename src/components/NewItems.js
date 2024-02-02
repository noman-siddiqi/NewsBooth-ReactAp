import React, { Component } from 'react'

export class NewItems extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, author, publishedAt, sourceName} = this.props;
        let url="https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/2/6/1/7/app_data-b5a70f8d80790860.png";
        return ( 
            <div className='my-3'>
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex:'1'}}>
                            {sourceName}</span>
                    <img src={imageUrl?imageUrl:url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By <b>{author? author:"unknown"}</b> on <b>{new Date(publishedAt).toGMTString()}</b></small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark" rel="noreferrer">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItems