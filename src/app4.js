// 实现分片上传
const express = require("express");
const path = require("path")
const app = express();
const multiparty = require('multiparty');

// 托管index.html页面
app.use("/", express.static(path.join(__dirname, "../", "public")));
app.post("/upload", (req, res) => {
  const form = new multiparty.Form({
    uploadDir: path.join(__dirname, "../", "tempFile")
  });
  form.parse(req);
  form.on("file", () => {
    console.log('上传 成功 ');
  })

  res.send('upload success')
})

app.listen(3000, () => {
  console.log('server on 3000');
})