import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import BookCard from "../components/BookCard";
import { CardPanel, Container } from "react-materialize";
import API from "../utils/API";


const Saved = () => {
    const [favorites, setFavorites] = useState([]); // favorite books state var

    useEffect(() => {
        getSavedBooks();
    }, [])

    const getSavedBooks = () => {
        API.getSavedBooks()
            .then(res => {
                setFavorites([...res.data]);
            })
            .catch(err => {
                console.log(err)
                setFavorites([]);
            });
    }

    const handleBookDelete = id => {
        // console.log("handling book delete: " + id);
        API.deleteBook(id).then((res) => {
            window.M.toast({html:`${res.data.title} -  Deleted!`},4000)
            getSavedBooks();
        });
    }

    return (
        <Container>
            <Hero />
            <CardPanel className="cyan lighten-2">
                <h6 className="white-text">Saved Books!</h6>
                <ul>
                    {favorites && favorites.map(book => (
                        <li key={book.googleId}>
                            <BookCard
                                // key={book.id} // should be unique
                                title={book.title}
                                link={book.link}
                                authors={book.authors}
                                image={book.image}
                                description={book.description}
                                bttnOnClick={() => handleBookDelete(book._id)}
                                bttnText={"Delete!"}
                                bttnColor={"red"}
                            />
                        </li>
                    ))}
                </ul>
            </CardPanel>
        </Container>
    )
}

export default Saved;