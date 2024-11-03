const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get a specific item by its ID
 */
router.get("/:id", rejectUnauthenticated, (req, res) => {
  const categoryId = req.params.id; // Get the ID from the URL
  const queryText = "SELECT * FROM Products WHERE category_id= $1;"; // Query to get the specific product
  const values = [categoryId]; // Parameterized query to prevent SQL injection

  pool
    .query(queryText, values)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET for items:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
