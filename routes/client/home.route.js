const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.render("client/pages/home/index", {
    title: "Đây là trang chủ",
  });
});
module.exports = router;
