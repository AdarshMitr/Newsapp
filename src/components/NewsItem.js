import React from 'react'

const NewsItem =(props)=> {

   
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <div style={
            {
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0',
            }
          }>
            <span className="badge rounded-pill bg-danger" >{source}</span>
          </div>

          <img src={!imageUrl ? "https://c.ndtvimg.com/2019-08/b1q4llg8_maryam-nawaz650_625x300_08_August_19.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}

            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} targrt="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div></div>
    )
  }


export default NewsItem