const express = require('express')
const router = express.Router()
const { queryList, queryArticle, post, deleteOne, update } = require("../router_handlers/articleHandler")
//依据文章列表
router.get('/list', queryList)
//依据id查询文章
router.get('/:id', queryArticle)
// 增加文章
router.post('/post', post)
//删除
router.post('/deleteOne', deleteOne)
router.post('/update', update)

module.exports = router;