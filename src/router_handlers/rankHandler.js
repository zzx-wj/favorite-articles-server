exports.queryRank = (req, res) => {
  res.send({
    code: "0000",
    message: null,
    content: [
      {
        userName: `悟空`,
        points: '999',
        level: 3,
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F22%2F20171122181006_YhGQ8.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668305493&t=76b642fb9f93e527338c1b73f0d57d16',
        profile: '暂无个人简介',
        gender: '男',
        favor: '爱宝',
        statue: '在职',
      },
      {
        userName: `卡卡罗特`,
        points: '783',
        level: 7,
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201711%2F22%2F20171122181006_YhGQ8.thumb.400_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668305493&t=76b642fb9f93e527338c1b73f0d57d16',
        profile: '爱你就像爱生命',
        gender: '男',
        favor: '暂无',
        statue: '暂无',
      },
      {
        userName: `爱宝`,
        points: '10000',
        level: 22,
        avatar: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20200620ac%2F355%2Fw542h613%2F20200620%2F541b-ivffpcs8211626.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668305620&t=34fc26142cd045260e5c9313074963e2',
        profile: '无它，唯手熟尔',
        gender: '男',
        favor: '暂无',
        statue: '暂无',
      },
    ]
  })
}