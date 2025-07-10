module.exports.index = (req, res) => {
  res.render("client/pages/home/index", {
    title: "Đây là trang chủ",
  });
};
