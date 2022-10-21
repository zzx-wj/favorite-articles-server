const connection = require("../../db")
const url = require("url")

exports.queryList = (req, res) => {
  const sql = "select id,title from overall_articles"

  connection.query(sql, (err, results) => {
    if (err) return console.log(err);

    res.send({
      status: 0,
      message: 'success',
      data: results,
    })
  })
}
exports.queryArticle = (req, res) => {
  const articleId = Number(url.parse(req.url).pathname.slice(1))
  const sql = `select * from overall_articles where id=${articleId}`

  connection.query(sql, (err, result) => {
    if (err) return console.log(err);

    res.send({
      status: 0,
      message: 'success',
      data: result[0],
    })
  })
}
exports.post = (req, res) => {
  console.log(req.body);
  const { title, tags, content } = req.body;
  // const sql = `insert into overall_articles (title,tags,content ) values ('${title}','${tags}','${content})'`
  // const sql = `INSERT INTO overall_articles SET title = ${title},tags = ${tags}, content = ${content}'`
  const sql = `INSERT INTO overall_articles SET ?`
  connection.query(sql, { title, tags, content }, (err, results) => {
    if (err) return console.log(err);

    res.send({
      status: 0,
      message: 'success',
      data: "ok",
    })
  })
}
exports.deleteOne = (req, res) => {
  console.log(req.body);
  const { id } = req.body;
  const sql = `delete from overall_articles where id=${id}`

  connection.query(sql, { id }, (err, results) => {
    if (err) return console.log(err);

    res.send({
      status: 0,
      message: 'success',
      data: "delete success",
    })
  })
}
// UPDATE posts SET modified = ? WHERE id = ?
exports.update = (req, res) => {
  console.log(req.body);
  const { title, tags, content, id } = req.body;
  const sql = `UPDATE overall_articles SET title = ?,tags = ?,content = ? WHERE id = ?`

  connection.query(sql, [title, tags, content, id], (err, results) => {
    if (err) return console.log(err);

    res.send({
      status: 0,
      message: 'success',
      data: "delete success",
    })
  })
}