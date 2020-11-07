const db = require("../models");

module.exports = {
    findById: (req, res) => {
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(404).json(err))
    },
    findAll: (req, res) => {
        db.Book.find(req.query)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(404).json(err))
    },
    create: (req, res) => {
        db.Book.create(req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(500).send(err))
    },
    update: (req, res) => {
        db.Book.findOneAndUpdate({ id: req.params.id }, req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(404).json(err));
    },
    remove: (req, res) => {
        db.Book.findById(req.params.id)
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(404).json(err));
    }
};