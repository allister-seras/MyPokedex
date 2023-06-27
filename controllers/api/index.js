const router = require("express").Router;
const projectRoutes = require("./projectRoutes");
const userRoutes = require("./userRoutes");

router.use("/pokemon", projectRoutes);

module.exports = router;