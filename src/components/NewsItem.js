import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title , description, imageUrl,newsUrl,date,author,source} = this.props;
    return (
     
      <>
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt="..."  />
            <div className="card-body">
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:'1',left:'90%'}}>{source}</span>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text"><small className="text-muted">By: {author?author:'Unkown'} on: {new Date(date).toUTCString()}</small></p>
                {/* <h5 className="card-title"><small></small></h5> */}
                <p className="card-text" >{description}...</p>
                <a href={newsUrl}  rel="noreferrer" target="_blank" className="btn btn-sm btn-primary" >Read More</a>
            </div>
        </div>
        </>
    );
  }
}

export default NewsItem
 