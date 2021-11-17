import React from "react";
import "./About.css";

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <div className="heading">About Us</div>
                <div className="text">
                    ISTE NITK strives to supplement the campus’ academic environment by conducting a host of different technical events, workshops, and annual projects, aimed at making learning fun, insightful and impactful. With a host of various Special Interest Groups, or SIGs, our community specializes in domains ranging from various branches of engineering, to business, literature and media, ISTE NITK constantly strives to develop its’ members technical capabilities, and nurture a sense of creativity
                </div>
            </div>
        );
    }
}

export default About;
