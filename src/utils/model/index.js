const db = require("../db");

class Model {
  constructor(name) {
    this.name = name;
  }

  async run(query) {
    try {
      const response = await db.query(query);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  // BUG
  async findByIdAndUpdate(id, fields) {
    if (id) {
      const entries = Object.entries(fields);
      const query = `UPDATE ${this.name} SET ${entries
        .map(([key, val]) => `${key} = '${val}'`)
        .join(",")} WHERE id=${parseInt(id)};`;
      const response = await this.run(query);
      return response;
    }

    throw new Error(`${id}: This does not looks like id`);
  }
  // BUG

  async findByIdAndDelete(id) {
    if (id) {
      const query = `DELETE FROM ${this.name} WHERE id=${parseInt(id, 10)}`;

      const res = await this.run(query);

      return res;
    }
    throw new Error(`${id}: This does not looks like id`);
  }

  async findOne(fields) {
    if (!fields || Object.values(fields).length === 0) {
      const query = `SELECT * FROM ${this.name}`;
      const res = await this.run(query);
      return res;
    }
    const entries = Object.entries(fields);
    const whereClouse = `${entries
      .map(([key, val]) => `${key}='${val}'`)
      .join(" AND ")}`;

    const query = `SELECT * FROM ${this.name} WHERE ${whereClouse}`;
    const response = await this.run(query);
    return response;
  }

  async findById(id) {
    if (id) {
      const query = `SELECT * FROM ${this.name} WHERE id=${parseInt(id, 10)}`;
      const res = await this.run(query);
      return res;
    }
    throw new Error(`${id}: This does not looks like id`);
  }

  async save(fields) {
    if (!fields || Object.values(fields).length === 0) {
      throw new Error(`${fields} This does not looks like valid fields`);
    }
    const columns = Object.keys(fields);
    const values = Object.values(fields);
    const query = `INSERT INTO ${this.name} (${columns.join(
      ","
    )}) VALUES (${values.map((value) => `'${value}'`).join(",")})`;

    const res = await this.run(query);
    return res;
  }
}

module.exports = Model;
