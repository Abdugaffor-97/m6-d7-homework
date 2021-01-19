const express = require("express");
const cors = require("cors");
const services = require("./services");
const listEndpoints = require("express-list-endpoints");

const app = express();
app.use(express.json());

app.use("/api", services);

app.use(cors());

const port = process.env.PORT || 5000;

console.log(listEndpoints(app));

app.listen(port, () => {
  console.info(" ✅  app is running on http://localhost:" + port);
});

app.on("error", (error) => {
  console.error(" ❌ Error : server is not running :  " + error);
});
