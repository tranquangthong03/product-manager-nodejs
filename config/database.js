const mongoose = require("mongoose");

module.exports.connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Kết nối MongoDB thành công");
  } catch (error) {
    console.error("Kết nối MongoDB thất bại:", error);
  }
};
