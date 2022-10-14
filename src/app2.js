const express = require("express")
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express();
// 允许跨域
const cors = require("cors");
app.use(cors());//全局

// 解析请求体
//multipart/form

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// // application/json
app.use(bodyParser.json())
// // text/plain（下面两种都可以）
app.use(bodyParser.text())
// app.use(function (req, res, next) {
//   if (req.is('text/*')) {
//     req.text = '';
//     req.setEncoding('utf8');
//     req.on('data', function (chunk) { req.text += chunk });
//     req.on('end', next);
//   } else {
//     next();
//   }
// });

const cookieParser = require("cookie-parser");
const session = require("express-session");
const cookieSession = require("cookie-session");
const jwt = require("jsonwebtoken");
// 实现记录状态（同源和跨源）
// 1cookie
// 2cookie+session
// 3token；

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost");//允许该站点跨源访问
  res.header("Access-Control-Allow-Credentials", "true");//允许跨源站点携带身份凭证访问；
  res.header("Access-Control-Allow-Headers", "authenticate ");//允许跨源站点携带身份凭证访问；
  res.header("Access-Control-Allow-Headers", "content-type ");//允许json；
  next();
})

// 1cookie （仅仅使用cookie）
// app.use(cookieParser());
app.post("/api/user/login", upload.single('username'), (req, res) => {
  // res.cookie("isLogin", true);
  console.log(req.body)
  res.send({
    code: "0000",
    msg: null,
    content: '5008端口返回 登录成功'
  })
});
app.post("/api/user/myFavor", (req, res) => {
  console.log(req.cookies)
  res.json({ code: '0000', msg: "5008端口 consum success" });
});

// 2 cookie+session(两者结合时；)[其中写入session模块 有两个选择  均可]
// 让全局对可以写入session
// cookie-session模块
// app.use(cookieSession({
//   // 指定在cookie生成的session_id名称
//   name: 'movie-id',
//   // 加密的密钥
//   secret: 'fwfwif3iofiewfewfewfjiwjfoiwjfiwjfowjffiojfiwwfewklfjewlfjewlfejwl',
//   // 设置session有效期
//   // maxAge: 20 * 60 * 1000

// }))
// express - session模块
// app.use(session({
//   // name: "SID",
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   // cookie: { secure: true }
// }))
// app.post("/api/user/login", (req, res) => {
//   const { username, password } = req.body;
//   // 写入session
//   // req.session.islogin = username;
//   res.send({
//     code: "0000",
//     msg: null,
//     content: '5008端口返回 登录成功'
//   })
// });
// app.post("/api/user/myFavor", (req, res) => {
//   res.json({ code: '0000', msg: "这是5008端口返回的" });
// });

//3 使用token认证
const secret = "sjhajsdajdlaaajjaajajhajaj9w2"

// app.post("/api/user/login", upload.single('username'), (req, res) => {
//   let { username, password } = req.body;

//   const token = jwt.sign({
//     username,
//     iat: Math.floor(Date.now() / 1000)
//   }, secret)
//   res.send({
//     code: "0000",
//     msg: null,
//     content: '5008端口返回 登录成功',
//     token,
//   })
// });
// app.post("/api/user/myFavor", (req, res) => {
//   // 先校验token
//   console.log(req.body);
//   if (req.headers['authenticate']) {
//     const token = req.headers['authenticate'];
//     let data = jwt.verify(token, secret)
//     res.json({ code: '0000', msg: "这是5008端口返回的" });
//   }
// });


app.listen(5008, () => {
  console.log('server on 5008')
})