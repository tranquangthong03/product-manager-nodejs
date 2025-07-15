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
  // if (req.query.status) {
  //   const currentActive = filterStatus.find((item) => {
  //     return item.class == "active";
  //   });
  //   currentActive.class = "";
  //   const activeClass = filterStatus.find(
  //     (item) => item.status == req.query.status
  //   );
  //   activeClass.class = "active";
  //   console.log(activeClass);
  // } else {
  //   const allStatus = filterStatus.find((item) => {
  //     return item.status == "all";
  //   });
  //   allStatus.class = "active"; // Nếu không có status thì mặc định là "all"
  // }
  // Lấy status từ query string, nếu không có thì mặc định là "all"
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
  // let sumProducts = await product.countDocuments(find);
  if (req.query.status) {
    find.status = req.query.status;
  }
  const products = await product.find(find);
  res.render("admin/pages/products/index", {
    title: "Trang quản trị sản phẩm",
    products: products,
    filterStatus: filterStatus,
  });
};
