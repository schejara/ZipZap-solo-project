const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");


router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = "SELECT * FROM Categories;";
  console.log('in category router',queryText);
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET for items:", error);
      res.sendStatus(500);
    });
});

module.exports = router;