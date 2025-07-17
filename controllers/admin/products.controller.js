const product = require("../../models/product.model");
module.exports.index = async (req, res) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "all",
      icon: "fas fa-list",
      class: "",
      color: "secondary",
    },
    {
      name: "Hoạt động",
      status: "active",
      icon: "fas fa-check-circle",
      class: "",
      color: "success",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      icon: "fas fa-times-circle",
      class: "",
      color: "danger",
    },
  ];
  const targetStatus = req.query.status || "all";
  filterStatus.forEach((item) => {
    if (item.status === targetStatus) {
      item.class = "active";
    } else {
      item.class = "";
    }
  });
  let find = {
    deleted: false,
  };
  if (req.query.status) {
    find.status = req.query.status;
  }
  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i"); //Tìm kiếm không phân biệt chữ hoa chữ thường
    find.title = regex;
  }
  const products = await product.find(find);
  res.render("admin/pages/products/index", {
    title: "Trang quản trị sản phẩm",
    products: products,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
