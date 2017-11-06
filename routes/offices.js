const express = require("express");
const router = express.Router();
const models = require("../models/models");

// GET /api/offices
router.get("/", (req, res, next) => {
  models.get_offices().then(data => {
    res.status(200).json({ offices: data });
  });
});

// GET /api/offices/10
router.get("/:officeCode", (req, res, next) => {
  const code = { officeCode: req.params.officeCode };

  models.get_office_code(code).then(data => {
    res.status(200).json(data);
  });
});

// POST /api/offices
router.post("/", (req, res, next) => {
  const d = {
    officeCode: "13",
    city: "Taipei",
    phone: "+886 123 456 789",
    addressLine1: "YuanTon Doad",
    addressLine2: "campus",
    state: null,
    country: "TW",
    postalCode: "333",
    territory: "Taiwan"
  };

  models.insert_offices(d).then(() => {
    res.send("finished");
  });
});

// PUT /api/offices/10 & body(json)
router.put("/:officeCode", (req, res, next) => {
  let condition = { officeCode: req.params.officeCode };
  let new_data = {
    city: req.body.city,
    postalCode: req.body.postalCode
  };

  models.update_office(condition, new_data).then(() => {
    res.send("finished");
  });
});

module.exports = router;
