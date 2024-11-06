const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the items on the shelf
 */
router.get("/", rejectUnauthenticated, (req, res) => {

  const queryText = 'SELECT * FROM Orders WHERE "user_id" = $1 ORDER BY "updated_at" DESC';

  pool
    .query(queryText,[req.user.id])
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET from orders:", error);
      res.sendStatus(500);
    });
});
module.exports = router;
