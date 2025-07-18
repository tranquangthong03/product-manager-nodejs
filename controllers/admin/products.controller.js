const product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterStatus.js");
const searchHelper = require("../../helpers/search.js");
module.exports.index = async (req, res) => {
  const filterStatus = filterStatusHelper(req.query);
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
  // Tìm kiếm sản phẩm theo từ khóa
  const searchKeyword = searchHelper(req.query);
  const keyword = searchKeyword.keyword;

  if (searchKeyword.regex) {
    find.title = searchKeyword.regex;
  }
  const products = await product.find(find);
  res.render("admin/pages/products/index", {
    title: "Trang quản trị sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
