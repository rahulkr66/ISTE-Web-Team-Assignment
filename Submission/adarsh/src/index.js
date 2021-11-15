import React from "react";
import ReactDOM from "react-dom";
import "./Reset.css";

import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
    return(
        <div className="index">
            <NavBar />
            <Main />
            <Footer />
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
