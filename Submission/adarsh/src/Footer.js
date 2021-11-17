import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return(
        <div className="footer">
            {props.text}
        </div>
    );
}

export default Footer;
