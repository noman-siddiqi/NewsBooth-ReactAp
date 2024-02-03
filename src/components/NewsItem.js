import React from 'react'

const NewsItem = (props)=> {
        let {title, description, imageUrl, newsUrl, author, publishedAt, sourceName} = props;
        let url="https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/3/2/6/1/7/app_data-b5a70f8d80790860.png";
        return ( 
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right: 0}}>
                    <span className="badge rounded-pill bg-danger">
                            {sourceName}</span>
                    </div>
                
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

export default NewsItem