const axios = require("axios");
const db = require("../models");

// module.exports = {
//     findAll: (req, res) => {
//         const { query: params } = req;
//         axios.get("https://www.googleapis.com/books/v1/volumes", {
//           params
//         }).then(response => res.json(response))
//             // .then(googleResults =>
//             //     googleResults.data.items.filter(result => // filter googleResults to exclude books that do not have all required fields
//             //         result.volumeInfo.title &&
//             //         result.volumeInfo.infoLink &&
//             //         result.volumeInfo.authors &&
//             //         result.volumeInfo.description &&
//             //         result.volumeInfo.imageLinks
//             //     )
//             // ).then(googleBooks => { //googleBooks - response json from google books, with book info
//             //     db.Book.find().then(dbBooks => // dbBooks - our server's stored books, get all dbBooks
//             //         googleBooks.filter(googleBook => // filter googleBooks to exclude already saved books
//             //             dbBooks.every(dbBook => dbBook.API_ID.toString() !== googleBook.id)
//             //         )
//             //     )
//             // })
//             .then(books => res.json(books)) //send back book json
//             .catch(err => console.log(err));
//     }
// };

module.exports = {
    findAll: function(req, res) {
      console.log("Hitting findAll");
      const { query: params } = req;
      axios
        .get("https://www.googleapis.com/books/v1/volumes", {
          params
        })
        .then(results =>
          results.data.items.filter(
            result =>
              result.volumeInfo.title &&
              result.volumeInfo.infoLink &&
              result.volumeInfo.authors &&
              result.volumeInfo.description &&
              result.volumeInfo.imageLinks &&
              result.volumeInfo.imageLinks.thumbnail
          )
        )
        .then(apiBooks =>
          db.Book.find().then(dbBooks =>
            apiBooks.filter(apiBook =>
              dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
            )
          )
        )
        .then(books => res.json(books))
        .catch(err => {res.status(422).json(err); console.log(err)});
    }
  };