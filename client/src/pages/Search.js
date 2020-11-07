import React, { useState } from "react";
import M from "materialize-css";
import Hero from "../components/Hero";
import SearchCard from "../components/SearchCard";
import BookCard from "../components/BookCard";
import { CardPanel, Container } from "react-materialize";
import API from "../utils/API";

M.AutoInit();
const Search = () => {
    const [books, setBooks] = useState([]); //empty array
    const [q, setQ] = useState(""); //query state var - empty string

    const getBooks = () => {
        // console.log("getting books")
        API.getBooks(q)
            .then(res =>
                setBooks(res.data)
            )
            .catch(() =>
                setBooks([])
            );
    };

    const handleInputChange = event => {
        const { value } = event.target;
        setQ(value);
    };

    const handleBookSave = id => {
        // console.log("Handle Book Save, Id: " + id);
        const book = books.find(book => book.id === id);
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            subtitle: book.volumeInfo.subtitle,
            link: book.volumeInfo.infoLink,
            authors: book.volumeInfo.authors,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        })
            .then(res => {
                getBooks();
                window.M.toast({ html: `${res.data.title} -  Saved!` }, 4000)
            })
            .catch(err => console.log(err));
    };

    return (
        <Container>
            <Hero />
            <SearchCard q={q} handleInputChange={handleInputChange} getBooks={getBooks} />
            {books.length > 0 ?
                <CardPanel className="cyan lighten-2">
                    <h6 className="white-text">Search Results</h6>
                    {books && books.map(book => (
                        <BookCard
                            key={book.id} // should be unique
                            title={book.volumeInfo.title}
                            link={book.volumeInfo.infoLink}
                            authors={book.volumeInfo.authors}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            description={book.volumeInfo.description}
                            bttnOnClick={() => handleBookSave(book.id)}
                            bttnText={"Save!"}
                            bttnColor={"green"}
                        />
                    ))}
                </CardPanel>
                :
                <div></div>
            }
        </Container>
    )
}

export default Search;