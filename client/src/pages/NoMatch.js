import React from "react";
import {Link} from "react-router-dom";
import {Container, CardPanel} from "react-materialize";
import Hero from "../components/Hero";


const NoMatch = () => {
    return(
        <Container>
            <Hero />
            <CardPanel className="cyan lighten-2 center-align">
                <h6 className="white-text">Sorry, there's nothing here 😰</h6>
                <Link to="/">🏠Go Home!</Link>
            </CardPanel>
        </Container>
    )
}

export default NoMatch;