const Model = require("../../utils/model");

const router = require("express").Router();

const CategoryModel = new Model("categories");

router.get("/", async (req, res, next) => {
  try {
    const authorsTable = await CategoryModel.findOne();
    res.send(authorsTable);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await CategoryModel.findByIdAndDelete(req.params.id);

    res.send("Deleted");
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await CategoryModel.findById(req.params.id);
    res.send(rows);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await CategoryModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await CategoryModel.save(req.body);
    res.send(response);
    // console.log(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
