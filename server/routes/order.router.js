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
  const queryText = "SELECT * FROM Orders;";
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET for items:", error);
      res.sendStatus(500);
    });
});

/// Insert

router.post("/", rejectUnauthenticated, (req, res) => {
    console.log('Incoming order data:', req.body); 
    const { user_id, total_amount, orderItemDetails } = req.body; // Assuming orderDetails is an array
    const queryText =
        "INSERT INTO Orders (user_id, total_amount) VALUES ($1, $2) RETURNING order_id;";
    const params = [user_id, total_amount];

    pool.query(queryText, params)
        .then(result => {
            // Capture the order_id
            const [{ order_id }] = result.rows;

            // Insert each order detail using map
            orderItemDetails.map(detail => {
                const detailQueryText = `
                    INSERT INTO OrderDetails (order_id, product_id, quantity, price)
                    VALUES ($1, $2, $3, $4);
                `;
                const detailParams = [order_id, detail.product_id, detail.quantity, detail.price];

                // Execute the insert query for each detail
                pool.query(detailQueryText, detailParams)
                    .catch(error => {
                        console.log("Error inserting order detail:", error);
                    });
            });

            // Send a success response
            res.sendStatus(201);
        })
        .catch(error => {
            console.log("Error making POST for items:", error);
            res.sendStatus(500);
        });
});





  
  /**
   * Delete an item if it's something the logged in user added
   */
  router.delete("/:id/:user_id", rejectUnauthenticated, (req, res) => {
    const id = req.params.id
    const itemUserId = req.params.user_id
    const userId = req.user.id
    // const itemId = req.item.user_id
    const queryText = 'DELETE from Orders WHERE id = $1'
    const params = [id]
  
     if(itemUserId == userId){
      pool
      .query(queryText, params)
      .then((results) => res.sendStatus(200))
      .catch((error) => {
        console.log("Error making DELETE for orders:", error);
        res.sendStatus(500);
      });
    }
  });
  module.exports = router;