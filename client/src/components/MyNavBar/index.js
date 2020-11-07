import React from "react";
import { Link } from "react-router-dom";
// import M from "materialize-css";
import { Navbar, Icon } from "react-materialize";

const MyNavBar = (props) => {
    return (
        <Navbar
            className="cyan lighten-2"
            alignLinks="left"
            brand={<Link className="brand-logo" to="/">(R)GBS</Link>}
            centerLogo
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <Link to="/">Search</Link>
            <Link to="/saved">Saved</Link>
        </Navbar>
    )
}


export default MyNavBar;