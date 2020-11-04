const path = require("path");
const bookController = require("../../Main/controllers/bookController");
const googleController = require("../../Main/controllers/googleController");
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

//React App
//for everything else, send the React app html page
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

module.exports = router;