require("dotenv").config();
const fs = require("fs");
const path = require("path");
const db = require("../utils/db");
const { promisify } = require("util");
const read = promisify(fs.readFile);

const createTable = async () => {
  try {
    const dataPath = path.join(__dirname, "../data/tables.sql");
    const data = await read(dataPath);
    const sqlQuery = data.toString();
    await db.query(sqlQuery);
  } catch (error) {
    console.log(error);
  }
  db.pool.end();
};

createTable();
