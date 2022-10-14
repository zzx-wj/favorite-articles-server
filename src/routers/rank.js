const express = require('express')
const router = express.Router()
const { queryRank } = require("../router_handlers/rankHandler")

router.get('/queryRank', queryRank)

module.exports = router;