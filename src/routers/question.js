const exprss = require("express")
const router = exprss.Router();

const { queryQuestionTabs, queryQuestionList } = require("../router_handlers/questionHandler")


// 问题标签查询
router.get("/queryQuestionTabs", queryQuestionTabs)

// 问题列表查询
router.post("/queryQuestionList", queryQuestionList)


module.exports = router;