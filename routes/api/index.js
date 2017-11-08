const router = require("express").Router();
const stockRoutes = require("./stocks");

// User routes
router.use("/stocks", stockRoutes);

module.exports = router;
