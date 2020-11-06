import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { CardPanel, TextInput, Button, Icon, Container, Row, Col } from "react-materialize";
import { ListItem } from "../List";
import "./style.css";


const BookCard = ({ title, link, authors, image, description, saveBttnOnClick }) => {
    return (
        <div>
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
                                className="green lighten-2 btn-margin"
                                onClick={() => saveBttnOnClick()} //function
                            >Save!
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
        </div>
    )
}

export default BookCard;