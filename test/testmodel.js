const models = require("../models/models");

models.get_offices().then(data => {
  console.log(data);
});
