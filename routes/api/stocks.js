const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

// Matches with "/api/stocks/:stock"
router
  .route("/:stock")
  .get(stocksController.findAll)

module.exports = router;