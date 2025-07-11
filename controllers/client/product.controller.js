const Product = require("../../models/product.model");
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });
  // const newProduct = products.map((product) => {
  //   price = (product.price * (100 - product.discountPercentage)) / 100;
  //   return {
  //     ...product._doc,
  //     newPrice: price, // Thêm trường mới tên là newPrice
  //   };
  // });
  const newProducts = products.map((product) => {
    product.newPrice = (
      (product.price * (100 - product.discountPercentage)) /
      100
    ).toFixed(0); // Thêm 1 trường giá mới
    product.savePrice = (
      (product.price * product.discountPercentage) /
      100
    ).toFixed(0); // Tính giá tiết kiệm
    return product;
  });
  console.log(products);
  res.render("client/pages/products/index", {
    title: "Trang sản phẩm",
    products: products,
    newProducts: newProducts, // Truyền mảng sản phẩm mới vào view
  });
};
