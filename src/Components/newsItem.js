import React from "react";
import './style.css';
const NewsItem=(props)=>{
return(
    <div className="newsitem">
       <h1>{props.data.title}</h1>
       <p>{props.data.description}</p>
       <img src={props.data.urlToImage}/>
    </div>
)
};
export default NewsItem;