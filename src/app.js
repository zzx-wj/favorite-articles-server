const express = require("express")
const app = express();
// 托管index.html页面
app.use("/", express.static("public"));
// 跨域
const cors = require("cors");
app.use(cors());//全局

// user路由
const userRouter = require("./routers/user")
app.use("/api/user", userRouter)

//question 路由
const questionRouter = require("./routers/question")
app.use("/api/question", questionRouter)

// rank路由
const rankRouter = require("./routers/rank")
app.use("/api/rank", rankRouter)

app.listen(3007, () => {
  console.log('mianshiya server on 3007')
})