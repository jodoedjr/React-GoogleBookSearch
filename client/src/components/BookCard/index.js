import React from "react";
// import M from "materialize-css";
import { CardPanel, Button, Row, Col } from "react-materialize";
// import { ListItem } from "../List";
import "./style.css";


const BookCard = ({ title, link, authors, image, description, bttnOnClick, bttnText, bttnColor }) => {
    return (
        <CardPanel className="grey lighten-3">
            <Row>
                <Col m={8}>
                    <h5 className="font-italic">{title}</h5>
                    {/* {subtitle && <h5 className="font-italic">{subtitle}</h5>} */}
                    <p className="font-italic">Written by {authors}</p>
                </Col>
                <Col m={4}>
                    <div className="right-align">
                        <a href={link}>
                            <Button
                                node="button"
                                waves="light"
                                className="blue lighten-2 btn-margin"
                            >View!
                            </Button>
                        </a>
                        <Button
                            node="button"
                            waves="light"
                            className={`${bttnColor} lighten-2 btn-margin`}
                            onClick={() => {bttnOnClick()}} //function
                        >{bttnText}
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} s={12} m={3}>
                    <img className="responsive-image" src={image} alt={title} />
                </Col>
                <Col xs={12} s={12} m={9}>
                    <div className="desc-box">{description}</div>
                </Col>
            </Row>
        </CardPanel>
    )
}

export default BookCard;