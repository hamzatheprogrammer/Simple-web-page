import React from "react";
import './style.css'


function NavBar(){
    return(
        <div>
            <nav>
                <ul className="nav nav-tabs">
                    <li className="page-links"><a href="/">Home</a></li>
                    <li className="page-links"><a href="/">About</a></li>
                    <li className="page-links"><a href="/">News</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;