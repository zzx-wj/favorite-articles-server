const express = require("express")
const bodyParser = require('body-parser')
const app = express();
// 托管index.html页面
app.use("/", express.static("public"));
//解析body
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//application/json
app.use(bodyParser.json())
//text/plain
app.use(bodyParser.text())
// app.use(function (req, res, next) {
//   if (req.is('text/*')) {
//     req.text = '';
//     // req.setEncoding('utf8');
//     req.on('data', function (chunk) {
//       console.log(chunk);
//       console.log(chunk.toString());
//       req.text += chunk
//     });
//     req.on('end', next);
//   } else {
//     next();
//   }
// });

// 跨域
const cors = require("cors");
app.use(cors());//全局


// articles路由
const articlesRouter = require("./routers/articles");
app.use("/api/articles", articlesRouter)


// user路由
const userRouter = require("./routers/user")
app.use("/api/user", userRouter)

//question 路由
// const questionRouter = require("./routers/question")
// app.use("/api/question", questionRouter)


app.listen(3007, () => {
  console.log('mianshiya server on 3007')
})