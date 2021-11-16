import React from "react";
import "./Card.css";

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="image">
                    <img src={this.props.image} />
                </div>
                <div className="name">
                    {this.props.name}
                </div>
            </div>
        );
    }
}

export default Card;
