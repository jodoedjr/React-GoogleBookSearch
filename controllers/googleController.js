const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        axios.get("https://www.googleapis.com/books/v1/volumes", {
            q: req.params
        })
            .then(googleResults =>
                googleResults.data.items.filter(result => // filter googleResults to exclude books that do not have all required fields
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks
                )
            ).then(googleBooks => { //googleBooks - response json from google books, with book info
                db.Book.find().then(dbBooks => // dbBooks - our server's stored books, get all dbBooks
                    googleBooks.filter(googleBook => // filter googleBooks to exclude already saved books
                        dbBooks.every(dbBook => dbBook.API_ID.toString() !== googleBook.id)
                    )
                )
            })
            .then(books => res.json(books)) //send back book json
            .catch(err => res.status(500).json(err));
    }
};