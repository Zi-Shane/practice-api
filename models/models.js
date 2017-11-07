let dbhost = 'mariadb'

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: dbhost,
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
  get_office_by_code(condition) {
    return knex("offices")
      .select()
      .where(condition)
      .then(build);
  },
  get_office_by_code_greaterthan(code) {
    return knex("offices")
      .select()
      .where("officeCode", ">", code)
      .then(build);
  },
  insert_offices(office) {
    return knex("offices")
      .insert(office)
      .then(build);
  },
  update_office(condition, new_data) {
    return knex("offices")
      .where(condition)
      .update(new_data);
  },
  delete_offices(condition) {
    return knex("offices")
      .where(condition)
      .del()
      .then(build);
  },
  get_offices_join_employees() {
    return knex("offices")
      .select("*")
      .innerJoin("employees", "offices.officeCode", "employees.officeCode");
  }
};
