import React from "react";
import NewsItem from "./newsItem";
import './style.css';
const NewsList =(props)=>{
return(
    <div>{
        props.news.map((item)=>(<NewsItem data={item}/>))
    } 
    
        </div>
)
};
export default NewsList;