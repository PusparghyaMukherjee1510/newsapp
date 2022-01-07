import React from "react";
import './style.css';
const LeftBar=()=>{
    return(
        <div className="leftbar">
            <h2>Catageories</h2>
             <ul>
                 <li><button>Sports</button></li>
                 <li><button>Politics</button></li>
                 <li><button>Business</button></li>
                 <li><button>Tech</button></li>
                 <li><button>Entertainment</button></li>
             </ul>
        </div>
    );
};
export default LeftBar;