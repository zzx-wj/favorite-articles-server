const http = require("http");
const url = require("url")
const path = require('path')
const { stat, readFile } = require("fs/promises")
const crypo = require("crypto")
//强制缓存与协商缓存
http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url)
  const fileName = pathname === "/"
    ?
    path.join(__dirname, './', pathname, 'public/index.html')
    :
    path.join(__dirname, './', pathname);
  // console.log(filePath);//index.html文件
  // 强制缓存
  res.setHeader('Cache-Control', "max-age=10")
  // res.setHeader("Expires", new Date(new Date().getTime() + 1000 * 10).toGMTString())
  try {
    const statObj = await stat(fileName)
    // console.log(statObj)//读取文件之后，可以得到ctime；
    const ctime = statObj.ctime.toGMTString()
    res.setHeader('Last-Modified', ctime);

    if (req.headers['if-modified-since'] === ctime) {
      //时间协商
      return (res.statusCode = 304) && res.end()
    }

    if (statObj.isFile()) {
      //读取的是一个文件
      const result = await readFile(fileName)
      //内容协商
      let hash = crypo.createHash('md5').update(result).digest("base64");
      res.setHeader("ETag", hash);
      if (req.headers['if-none-match'] === hash) {
        return (res.statusCode = 304) && res.end()
      }

      console.log(fileName);
      res.end(result)
    } else {
      res.statusCode = 404;
      res.end("NOT FOUND")
    }
  } catch (error) {
    res.statusCode = 404;
    res.end("NOT FOUND")
  }



}).listen(3009)