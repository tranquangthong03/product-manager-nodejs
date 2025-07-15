const express = require("express");
const router = express.Router();
const productAdminController = require("../../controllers/admin/products.controller");
router.get("/", productAdminController.index);
module.exports = router;
