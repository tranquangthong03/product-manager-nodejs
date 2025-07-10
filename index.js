const express = require("express");
require("dotenv").config();
const indexRoute = require("./routes/client/index.route");
const app = express();
const port = process.env.PORT;
// Cấu hình view engine là pug
app.set("view engine", "pug");
// Đường dẫn tới thư mục chứa các file pug (views)
app.set("views", "./views");
app.use(express.static("public"));
// Cấu hình đường dẫn tới thư mục chứa các file tĩnh (CSS, JS,..)
indexRoute(app);
app.listen(port, () => {
  console.log(`Ví dụ đã chạy với cổng ${port}`);
});
