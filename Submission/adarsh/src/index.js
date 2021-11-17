import React from "react";
import ReactDOM from "react-dom";
import "./Reset.css";

import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

class App extends React.Component {
    state = {
        "headerText": "Welcome to ISTE NITK",
        "footerText": "Footer"
    };

    render() {
        return(
            <div className="index">
                <NavBar text={this.state.headerText}/>
                <Main />
                <Footer text={this.state.footerText}/>
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
