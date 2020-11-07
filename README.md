# React-GoogleBookSearch [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Search for and save favorite books using GoogleBooks API
Live at: https://sheltered-peak-59009.herokuapp.com/

## Description 

This MERN application uses a React Front End and the GoogleBooks API to find books by title. Users can search for a book by title, view cover thumbnails and book descriptions, and save favorite books to a MongoDb.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

Clone this repo.
Run `npm install` in the cloned base directory, and run locally (`npm start` executes `run react-scripts`)


## Usage 

Users can search for books by title on the search page by typing a partial title in the search field and submitting the form.
![Landing Page](https://github.com/jodoedjr/React-GoogleBookSearch/blob/main/readme_assets/sheltered-peak-59009.herokuapp.com_.png "Book search landing page")

Books can be saved to the database by clicking the 'Save!' button. The 'View!' button links to the GoogleBooks webpage for the book.
A Toast appears to inform the user of a successful save.
![Saved a Book](https://github.com/jodoedjr/React-GoogleBookSearch/blob/main/readme_assets/sheltered-peak-59009.herokuapp.com_LeftHand_Saved.png "Saved Left Hand of Darkness")

Saved books appear on the saved books page. This page provides the same 'View!' link, and also a button for 'Delete!' -ing the saved book from the database.
![Saved Books](https://github.com/jodoedjr/React-GoogleBookSearch/blob/main/readme_assets/sheltered-peak-59009.herokuapp.com_saved.png "Saved Books")

A Toast appears to inform the user of a successful deletion.
![Deleted a Book](https://github.com/jodoedjr/React-GoogleBookSearch/blob/main/readme_assets/sheltered-peak-59009.herokuapp.com_LeftHand_Deleted.png "Deleted Left Hand of Darkness")


## License

This repo is covered by the MIT license


## Contributing

Please add issues to the issues section of the repo


## Tests

no tests provided


## Questions

Find me on GitHub at: https://github.com/jodoedjr

