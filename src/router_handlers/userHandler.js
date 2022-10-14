const connection = require("../../db/index")
const cors = require("cors");
// 登录
exports.login = (req, res) => {
  res.cookie("key1", "val1");
  res.send({
    code: "0000",
    message: null,
  })
}

// 注册
exports.register = (req, res) => {
  res.send('register ok')
}
//积分排名；
exports.rank = (req, res) => {
  res.send('rank list')
}
