import React from "react";
import CountryList from "./countryList";
import NewsList from "./newsList";

class NewsApp extends React.Component{
    constructor(props){
        super(props);
        this.state={news:[],};
    }

    componentDidMount(){
        fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=00237bb762584b7396759b7f19451e2f')
        .then((response)=>{
            console.log(response);
            return response.json();
        }).then((jsonResponse)=>{
             console.log(jsonResponse);
             this.setState({news:jsonResponse.articles});
        })
    }

    fetchNewData=(country)=>{
        fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=00237bb762584b7396759b7f19451e2f`)
        .then((response)=>{
            console.log(response);
            return response.json();
        }).then((jsonResponse)=>{
             console.log(jsonResponse);
             this.setState({news:jsonResponse.articles});
        }) 
    }

    render(){
        return(<div>
            <CountryList fetchNewData={this.fetchNewData}/>
           <NewsList news={this.state.news}/>
         <p>
             <button className="btn">Next</button>
         </p>
        </div>)
    }
}

export default NewsApp;