const path = require("path");
const bookController = require("../controllers/bookController")
const googleController = require("../controllers/googleController");
const router = require("express").Router();

//API Routes
//books
//get all
router.route("/api/books")
    .get(bookController.findAll)
    .post(bookController.create);

//delete book
router.route("/api/books/:id")
    .get(bookController.findById)
    .put(bookController.update)
    .delete(bookController.remove);


//googlebooks
//findall
router.route("/api/google")
    .get(googleController.findAll);

router.route("/api/google/test")
    .get((req, res, next) => {
        res.json("TEST");
    });

//React App
//for everything else, send the React app html page
router.use((req, res) => {
    res.json("Hit the catch all")
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;