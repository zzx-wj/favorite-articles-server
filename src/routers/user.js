const exprss = require("express")
const router = exprss.Router();
const { login, register, rank } = require("../router_handlers/userHandler")


// 登录
router.post("/login", login)
// 注册
router.post("/register", register)
//积分排名 
router.post("/rank", rank)

module.exports = router;