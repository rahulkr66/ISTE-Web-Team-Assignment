import React from "react";
import "./Cards.css";

import Card from "./Card";

import Catalyst from "./images/catalyst.png";
import Chronicle from "./images/chronicle.png";
import Charge from "./images/charge.png";
import Clutch from "./images/clutch.png";
import Concrete from "./images/concrete.png";
import Create from "./images/create.png";
import Credit from "./images/credit.png";
import Crypt from "./images/crypt.png";

const dataConfig = {
    catalyst: {
        name: "Catalyst",
        image: Catalyst,
        key: 0
    },
    chronicle: {
        name: "Chronicle",
        image: Chronicle,
        key: 1
    },
    charge: {
        name: "Charge",
        image: Charge,
        key: 2
    },
    clutch: {
        name: "Clutch",
        image: Clutch,
        key: 3
    },
    concrete: {
        name: "Concrete",
        image: Concrete,
        key: 4
    },
    create: {
        name: "Create",
        image: Create,
        key: 5
    },
    credit: {
        name: "Credit",
        image: Credit,
        key: 6,
    },
    crypt: {
        name: "Crypt",
        image: Crypt,
        key: 7
    }
}

class Cards extends React.Component {
    state = {
        "name": [
            "catalyst",
            "charge",
            "chronicle",
            "clutch",
            "concrete",
            "create",
            "credit",
            "crypt"
        ],
    };
    render() {
        let items = [];
        for (let i in this.state.name) {
            let card = this.state.name[i];
            let {name, image, key} = dataConfig[card];
            items.push(<Card
                name={name}
                image={image}
                key={key}
            />);
        }
        return(
            <div className="cards">
                {items}
            </div>
        );
    }
}

export default Cards;
