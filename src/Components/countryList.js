import React from "react";
import './style.css';
const CountryList=(props)=>{
    return(
    <div className="countrylist">
        <ul>
            <li><button onClick={()=>props.fetchNewData("in")}>INDIA</button></li>
            <li><button onClick={()=>props.fetchNewData("rs")}>RUSSIA</button></li>
            <li><button onClick={()=>props.fetchNewData("cn")}>CHINA</button></li>
            <li><button onClick={()=>props.fetchNewData("us")}>USA</button></li>
            <li><button onClick={()=>props.fetchNewData("ar")}>ARGENTINA</button></li>
        </ul>
           
    </div>
    )
};
export default CountryList;