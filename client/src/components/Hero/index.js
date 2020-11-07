import React from "react";
// import M from "materialize-css";
import { CardPanel } from "react-materialize";
import bgImage from "../../open-book-on-table.png";

const styles = {
    hero: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        overflow: "hidden"
    }
}

const Hero = (props) => {
    return (
        <CardPanel className="cyan lighten-2" style={styles.hero}>
            <span className="black-text center-align">
                <h3>(React) Google Book Search!</h3>
                <p>Search for books and save your favorites!</p>
            </span>
        </CardPanel>
    )
}

export default Hero;