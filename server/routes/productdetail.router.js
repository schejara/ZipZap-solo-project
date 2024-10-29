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
  const productId = req.params.id; // Get the ID from the URL
  const queryText = "SELECT * FROM Products WHERE product_id = $1;"; // Query to get the specific product
  const values = [productId]; // Parameterized query to prevent SQL injection

  pool
    .query(queryText, values)
    .then((results) => {
      // Check if a product was found
      if (results.rows.length > 0) {
        res.send(results.rows[0]); // Send back the first product found
      } else {
        res.sendStatus(404); // Send 404 if no product is found
      }
    })
    .catch((error) => {
      console.log("Error making GET for item:", error);
      res.sendStatus(500);
    });
});

module.exports = router;
