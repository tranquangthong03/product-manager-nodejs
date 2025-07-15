const express = require("express");
require("dotenv").config();
const indexRouteClient = require("./routes/client/index.route");
const indexRouteAdmin = require("./routes/admin/index.route");
const app = express();
const port = process.env.PORT;
const connectDB = require("./config/database");
const systemConfig = require("./config/system");
connectDB.connect();
// Cấu hình view engine là pug
app.set("view engine", "pug");
// Đường dẫn tới thư mục chứa các file pug (views)
app.set("views", "./views");
app.use(express.static("public"));
// Cấu hình đường dẫn tới thư mục chứa các file tĩnh (CSS, JS,..)

// Khai báo biến toàn cục, có thể sử dụng ở tất cả các file pug
app.locals.prefixAdmin = systemConfig.prefixAdmin;

indexRouteClient(app);
indexRouteAdmin(app);
app.listen(port, () => {
  console.log(`Ví dụ đã chạy với cổng ${port}`);
});
