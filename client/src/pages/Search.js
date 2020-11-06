import React, { useState, useEffect } from "react";
import M from "materialize-css";
import Hero from "../components/Hero";
import SearchCard from "../components/SearchCard";
import BookCard from "../components/BookCard";
import { CardPanel, TextInput, Button, Icon, Container, Row, Col } from "react-materialize";
import API from "../utils/API";
import axios from "axios";

let book1 = {
    title: "Left Hand of Darkness",
    link: "https://www.google.com",
    authors: ["me"],
    image: "https://via.placeholder.com/150",
    description: "desc",
    id: 1
}

//M.AutoInit();
const Search = () => {
    const [books, setBooks] = useState([]); //empty array
    const [q, setQ] = useState(""); //query state var - empty string

    const getBooks = () => {
        console.log("getting books")
        API.getBooks(q)
            .then(res => {
                setBooks(res.data)
            }
            )
            .catch(() =>
                setBooks([])
            );
    };

    const handleInputChange = event => {
        const { name, value } = event.target;
        setQ(value);
      };

    const handleBookSave = id => {
        console.log("Handle Book Save, Id: " + id);
        const book = books.find(book => book.id === id);
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    return (
        <Container>
            <Hero />
            <SearchCard q={q} handleInputChange={handleInputChange} getBooks={getBooks} />
            <CardPanel className="red lighten-5">
                <h6 className="red-text lighten-2">Search Results</h6>
                {books && books.map(book => (                    
                    <BookCard
                        title={book.volumeInfo.title}
                        link={book.volumeInfo.infoLink}
                        authors={book.volumeInfo.authors}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        description={book.volumeInfo.description}
                        saveBttnOnClick={() => handleBookSave(book.id)}
                    />
                ))}

            </CardPanel>
        </Container>
    )
}

export default Search;