const Model = require("../../utils/model");

const router = require("express").Router();

const table_name = "articles";
const ArticleModel = new Model(table_name);

router.get("/", async (req, res, next) => {
  try {
    const query = `SELECT ar.id, ar.headline, ar.content,
     ar.cover, ar.author_id, ar.category_id, au.first_name,
      au.last_name, au.email, cat.category_name FROM ${table_name} AS ar
      INNER JOIN authors as au ON ar.author_id=au.id 
      INNER JOIN categories as cat ON ar.category_id = cat.id;`;
    const { rows } = await ArticleModel.runQuery(query);
    if (rows) {
      res.send(rows);
    } else {
      res.send("Table is empty");
    }
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
    const { rows } = await ArticleModel.save(req.body);
    res.send(...rows);
    // console.log(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
