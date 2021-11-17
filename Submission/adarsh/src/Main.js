import React from "react";
import "./Main.css";

import About from "./About.js";
import Cards from "./Cards.js";

class Main extends React.Component {
    render() {
        return(
            <div className="main">
                <About />
                <Cards />
            </div>
        );
    }
}

export default Main;
