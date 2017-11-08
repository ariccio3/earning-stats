const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users/:stock"
router
  .route("/:stock")
  .get(usersController.findAll)

module.exports = router;