const models = require("../models/models");

// models.get_offices_join_employees().then(data => {
//   console.log(data)
// })
models.get_offices().then(data => {
  console.log(data);
});



