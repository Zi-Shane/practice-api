const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index");
const offices = require("./routes/offices");

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Route
app.use("/api", index);
app.use("/api/offices", offices);

const port = process.env.PORT || "3000";
app.listen(port, () => {
  console.log(`Server listen at port ${port}`);
});
