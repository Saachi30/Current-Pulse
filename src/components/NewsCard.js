import React from "react";
function NewsCard(props) {
    return (
        
        
        <div className="card">
            <img src={props.image} class="card-img-top " alt="Couldn't load image" />
            <div className="card-body" >
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text" >{props.desc}</p>
                
            </div>
            <div className="view-more">
            <a href={props.url} target="blank">View More</a>
            </div>
        </div>
        
        
    );
}

export default NewsCard;