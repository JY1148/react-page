import React from "react";
import "./Nav.css";
function Nav({setPage}){
    function navTo(e, target){
        // e.preventDefault();
        setPage(target);
    }

    return(
        <nav>
            <ul className="nav">
                <li className="nav-item"><a href="#Home" onClick={(e)=>navTo(e, 'Home')}>Home</a></li>
                <li className="nav-item"><a href="#Favorite" onClick={(e)=>navTo(e, 'Favorite')}>Favorite</a></li>
                <li className="nav-item"><a href="#Search" onClick={(e)=>navTo(e, 'Search')}>Search</a></li>
                <li className="nav-item"><a href="#About" onClick={(e)=>navTo(e, 'About')}>About</a></li>
                <li className="nav-item"><a href="#Privacy" onClick={(e)=>navTo(e, 'Privacy')}>Privacy</a></li>
            </ul>
        </nav>
    )
}
export default Nav;