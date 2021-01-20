const router = require("express").Router();

const articleRoutes = require("./articles");
const authorRoutes = require("./authors");
const csategoryRoutes = require("./categories");

router.use("/articles", articleRoutes);
router.use("/authors", authorRoutes);
router.use("/categories", csategoryRoutes);

module.exports = router;
