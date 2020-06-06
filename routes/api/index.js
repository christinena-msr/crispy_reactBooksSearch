const router = require("express").Router();
const bookRoutes = require("./books");

// Post routes
router.use("/book", bookRoutes);

module.exports = router;
