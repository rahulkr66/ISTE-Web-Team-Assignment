import React from "react";
import "./Main.css";

import Card from "./Card";

import Catalyst from "./images/catalyst.png";

class Main extends React.Component {
    state = {
        "name": [
            "Catalyst",
            "Charge",
            "Chronicle",
            "Clutch",
            "Concrete",
            "Create",
            "Credit",
            "Crypt"
        ],
    };
    render() {
        let items = [];
        for (let i = 0; i < this.state.name.length; i++) {
            items.push(<Card
                name={this.state.name[i]}
                image={Catalyst}
            />);
        }
        return(
            <div className="main">
                {items}
            </div>
        );
    }
}

export default Main;
