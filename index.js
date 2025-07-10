const express = require('express')
const indexRoute = require("./routes/client/index.route")
const app = express()
const port = 3000
// Cấu hình view engine là pug
app.set('view engine', 'pug');
// Đường dẫn tới thư mục chứa các file pug (views)
app.set('views', './views');
indexRoute(app)
app.listen(port, () => {
  console.log(`Ví dụ đã chạy với cổng ${port}`)
})
