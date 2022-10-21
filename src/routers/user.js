const exprss = require("express")
const router = exprss.Router();
const { login, register, rank, history, getCurrentUser } = require("../router_handlers/userHandler")


// 登录
router.post("/login", login)
// 注册
router.post("/register", register)
//积分排名 
router.post("/rank", rank)
//用户浏览记录
router.post("/history", history)
//用户信息
router.get("/getCurrentUser", getCurrentUser)

module.exports = router;