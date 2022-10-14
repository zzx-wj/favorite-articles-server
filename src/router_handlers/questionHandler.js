const connection = require("../../db/index")
const wait = (delay = 300) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

// 问题标签查询
exports.queryQuestionTabs = (req, res) => {
  res.send({
    code: "0000",
    message: null,
    content: [
      {
        label: `推荐`,
        key: 'recommend',
      },
      {
        label: `Java`,
        key: 'Java',
      },
      {
        label: `JavaScript`,
        key: 'JavaScript',
      },
      {
        label: `Python`,
        key: 'Python',
      },
    ]
  })
}

// 问题列表查询
exports.queryQuestionList = async (req, res) => {
  await wait();//延迟响应
  res.send(
    {
      code: '0000',
      message: null,
      content: [
        { _id: "54ad1eea61d3381c02b519f339edbff9", name: "在不增加元素的情况下画一个X", tags: ["前端", "JavaScript", "腾讯", "社招"], type: '选择', diffculty: '中等', createDate: '2022-07-05', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "17e3426e61c5c223004b46eb35853ae9", name: "浮动和清除浮动", tags: ["前端"], type: '简答', diffculty: '中等', createDate: '2022-05-08', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "bf4a0bf261c8996400ac0da61b3d3edb", name: "Java集合类框架的基本接口有哪些？", detail: "Java集合类框架的基本接口有哪些？", tags: ["java", "阿里"], type: '简答', diffculty: '简单', createDate: '2022-10-13', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "17e3426e61da6df5040ba04d34e32791", name: "怎么实现一个点赞功能？", tags: ["前端", "java", "数据库", "系统设计"], type: '选择', diffculty: '简单', createDate: '2022-10-0', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "54ad1eea61d460fa0308bff46de156a9", name: "怎么实现一个收藏功能？", tags: ["前端", "后端"], type: '简答', diffculty: '简单', createDate: '2022-10-12', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "54ad1eea61d3be5002ce65aa4dfe7638", name: "怎么实现一个赞赏功能？", tags: ["前端", "阿里巴巴", "实习"], type: '简答', diffculty: '困难', createDate: '2022-10-09', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "54ad1eea61cbf32d015e52ee2ebc77c2", name: "链操作运算符", tags: ["前端", "javascript"], detail: "<p>手动实现'防抖'和'节流'</p>", type: '简答', diffculty: '简单', createDate: '2022-10-11', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "54ad1eea61cc8b84018ad2185666f93b", name: "为什么性别字段不适合建立索引？", tags: ["数据库", "性能优化", "索引"], type: '简答', diffculty: '简单', createDate: '2022-10-13', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "5b049cc861d5763602b2f77629c89091", name: "手写深拷贝", tags: ["java", "百度", "社招"], type: '简答', diffculty: '简单', createDate: '2022-06-16', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "bf4a0bf261d03c2b0205e54a7ed9142e", name: "xml与json的却别", tags: ["java", "后端"], detail: "<p>spring的常用注解有哪些？</p>", type: '选择', diffculty: '简单', createDate: '2022-07-22', view: 37282, favour: 828, comment: 92, attention: 777, },
        { _id: "54ad1eea61ce666e01d64c97461264c6", name: "高度塌陷与外边距合并", tags: ["javascript", "前端"], detail: "<p>什么是'暂时性死区'？</p>", type: '简答', diffculty: '简单', createDate: '2022-03-26', view: 37282, favour: 828, comment: 92, attention: 777, },

      ]
    }
  )
}
