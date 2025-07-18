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
  // pagination
  const objectPagination = {
    currentPage: 1,
    limitProducts: 4,
  };
  // Tính tổng số trang
  const countPagination = await product.countDocuments({ deleted: false });
  const sumOfPagination = Math.ceil(
    countPagination / objectPagination.limitProducts
  );
  objectPagination.totalPage = sumOfPagination;
  //Xác định trang hiện tại
  let page = 1;
  if (req.query.page && !isNaN(parseInt(req.query.page))) {
    page = parseInt(req.query.page);
    if (page < 1) page = 1;
    if (page > objectPagination.totalPage) page = objectPagination.totalPage;
  }
  objectPagination.currentPage = page;
  // Tính startPage và endPage
  if (objectPagination.totalPage <= 3) {
    objectPagination.startPage = 1;
    objectPagination.endPage = objectPagination.totalPage;
  } else if (page === 1) {
    objectPagination.startPage = 1;
    objectPagination.endPage = 3;
  } else if (page === objectPagination.totalPage) {
    objectPagination.startPage = objectPagination.totalPage - 2;
    objectPagination.endPage = objectPagination.totalPage;
  } else {
    objectPagination.startPage = page - 1;
    objectPagination.endPage = page + 1;
  }

  const products = await product
    .find(find)
    .skip((objectPagination.currentPage - 1) * objectPagination.limitProducts)
    .limit(objectPagination.limitProducts);
  res.render("admin/pages/products/index", {
    title: "Trang quản trị sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
    pagination: objectPagination,
  });
};
