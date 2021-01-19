const Model = require("../../utils/model");

const router = require("express").Router();
const Model = require("../../utils/model");

const model_obj = new Model("authors");

router.post("/", async (req, res, next) => {
  try {
    const response = await model_obj.save(req.body);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
  res.send(response);
});

module.exports = router;
