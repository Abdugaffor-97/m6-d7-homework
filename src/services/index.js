const router = require("express").Router();

const articleRoutes = require("./articles");
const authorRoutes = require("./authors");

router.use("/articles", articleRoutes);
router.use("/authors", authorRoutes);

module.exports = router;
