import React from "react";
import "./Card.css";

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div>
                    <img src={this.props.image} alt="SIG Card" width="300px" height="245px" />
                </div>
                <div className="name">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default Card;
