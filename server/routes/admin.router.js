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
  const queryText = "SELECT * FROM Products;";
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET for items:", error);
      res.sendStatus(500);
    });
});

router.delete("/:product_id", rejectUnauthenticated, (req, res) => {
    console.log('incoming delete request at router', req.body);
    const productId = req.params.product_id
    console.log('In admin router id to be deleted', productId);
   
    const queryText = 'DELETE from Products WHERE product_id = $1';
    const params = [productId ];
  

      pool
      .query(queryText,params)
      .then((results) => res.sendStatus(200))
      .catch((error) => {
        console.log("Error making DELETE for items:", error);
        res.sendStatus(500);
      });
    
  });




/**
 * Get all of the items on the shelf
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = "SELECT * FROM Products;";
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET for items:", error);
      res.sendStatus(500);
    });
});

router.delete("/:product_id", rejectUnauthenticated, (req, res) => {
    console.log('incoming delete request at router', req.body);
    const productId = req.params.product_id
    console.log('In admin router id to be deleted', productId);
   
    const queryText = 'DELETE from Products WHERE product_id = $1';
    const params = [productId ];
  

      pool
      .query(queryText,params)
      .then((results) => res.sendStatus(200))
      .catch((error) => {
        console.log("Error making DELETE for items:", error);
        res.sendStatus(500);
      });
    
  });

 

/**
 * Get all of the items on the shelf
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = "SELECT * FROM Products;";
  pool
    .query(queryText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log("Error making GET for items:", error);
      res.sendStatus(500);
    });
});

router.delete("/:product_id", rejectUnauthenticated, (req, res) => {
    console.log('incoming delete request at router', req.body);
    const productId = req.params.product_id
    console.log('In admin router id to be deleted', productId);
   
    const queryText = 'DELETE from Products WHERE product_id = $1';
    const params = [productId ];
  

      pool
      .query(queryText,params)
      .then((results) => res.sendStatus(200))
      .catch((error) => {
        console.log("Error making DELETE for items:", error);
        res.sendStatus(500);
      });
    
  });

  router.put("/:product_id", rejectUnauthenticated, (req, res) => {
    console.log("Incoming update request body:", req.body);

    const productId = req.params.product_id;
    const {  price, inventory_count } = req.body; // Extracting the fields to update

    // SQL query to update the product
    const queryText = `
        UPDATE Products 
        SET 
            price = $1, 
            inventory_count = $2
        WHERE product_id = $3;
    `;
    
    const params = [ price, inventory_count, productId];

    // Execute the query
    pool
      .query(queryText, params)
      .then(() => {
          res.sendStatus(200); // Successfully updated
      })
      .catch((error) => {
        console.log("Error making UPDATE for items:", error);
        res.sendStatus(500);
      });
});





  
module.exports = router;





  






  

