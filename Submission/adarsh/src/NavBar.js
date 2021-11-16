import React from "react";
import "./NavBar.css";

const NavBar = (props) => {
    return(
        <div className="navbar">
            {props.text}
        </div>
    );
}

export default NavBar;
