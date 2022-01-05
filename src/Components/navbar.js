
import React from "react";

import './style.css';

function NavBar() {
    return (
        <div className='navbar'>
            <h1>Daily News App</h1>
            <nav>
              <ul>
               <li><a href='#'>Home</a></li>
               <li><a href='#'>About</a></li>
               <li><a href='#'>Sign Up</a></li>
               <li><a href='#'>Log Out</a></li>   
              </ul>  
            </nav>
        </div>
    )
}

export default NavBar;
