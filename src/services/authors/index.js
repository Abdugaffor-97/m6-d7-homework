const Model = require("../../utils/model");

const router = require("express").Router();

const AuthorModel = new Model("authors");

router.post("/", async (req, res, next) => {
  try {
    const response = await AuthorModel.save(req.body);
    res.send(response);
    // console.log(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
