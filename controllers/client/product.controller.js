module.exports.index = (req, res) => {
  res.render("client/pages/products/index", {
    title: "Trang sản phẩm",
  });
};
