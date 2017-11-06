const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "mariadb",
    user: "zishane",
    password: "room3506kaiyEEEE",
    database: "classicmodels"
  }
});

let build = item => item;

module.exports = {
  get_offices() {
    return knex("offices")
      .select()
      .then(build);
  },
  get_office_code(condition) {
    return knex("offices")
      .select()
      .where(condition)
      .then(build)
  },
  insert_offices(office) {
    return knex("offices")
      .insert(office)
      .then(build);
  },
  update_office(condition, new_data) {
    return knex("offices")
      .where(condition)
      .update(new_data)
  }
};
