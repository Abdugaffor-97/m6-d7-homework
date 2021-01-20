const Model = require("../../utils/model");

const router = require("express").Router();

const ArticleModel = new Model("articles");

router.get("/", async (req, res, next) => {
  try {
    const { rows } = await CategoryModel.save(req.body);
    res.send(...rows);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await ArticleModel.findByIdAndDelete(req.params.id);

    res.send("Deleted");
  } catch (error) {
    res.send(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await ArticleModel.findById(req.params.id);
    res.send(rows);
  } catch (error) {
    res.send(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await ArticleModel.findByIdAndUpdate(
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
    const response = await ArticleModel.save(req.body);
    res.send(response);
    // console.log(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
