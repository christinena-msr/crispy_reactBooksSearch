const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/posts"
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
