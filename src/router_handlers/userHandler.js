const connection = require("../../db/index")
const cors = require("cors");
const fs = require('fs');
const path = require("path")
const url = require("url")
const { wait } = require("../utils/util")

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
//浏览记录
exports.history = async (req, res) => {
  await wait(1000);
  res.send({
    code: "0000",
    message: null,
    content: [
      { _id: "17e3426e61da6df5040ba04d34e32791", name: "用户浏览记录1？", tags: ["前端", "java", "数据库", "系统设计"], type: '选择', diffculty: '简单', createDate: '2022-10-0', view: 37282, favour: 828, comment: 92, attention: 777, },
      { _id: "54ad1eea61d460fa0308bff46de156a9", name: "怎么实现一个收藏功能？", tags: ["前端", "后端"], type: '简答', diffculty: '简单', createDate: '2022-10-12', view: 37282, favour: 828, comment: 92, attention: 777, },
      { _id: "5b049cc861d5763602b2f77629c89091", name: "手写深拷贝", tags: ["java", "百度", "社招"], type: '简答', diffculty: '简单', createDate: '2022-06-16', view: 37282, favour: 828, comment: 92, attention: 777, },
      { _id: "bf4a0bf261d03c2b0205e54a7ed9142e", name: "xml与json的却别", tags: ["java", "后端"], detail: "<p>spring的常用注解有哪些？</p>", type: '选择', diffculty: '简单', createDate: '2022-07-22', view: 37282, favour: 828, comment: 92, attention: 777, },
      { _id: "54ad1eea61ce666e01d64c97461264c6", name: "高度塌陷与外边距合并", tags: ["javascript", "前端"], detail: "<p>什么是'暂时性死区'？</p>", type: '简答', diffculty: '简单', createDate: '2022-03-26', view: 37282, favour: 828, comment: 92, attention: 777, },
    ]
  })
}
//当前用户信息
exports.getCurrentUser = async (req, res) => {
  await wait(1500);
  res.send({
    code: '0000',
    message: '当前账户为空',
    currentUser: {}
  })
}
