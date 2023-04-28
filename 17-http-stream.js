var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    //common readFile method will read the entire file
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    //this readStream will only read part of the file from each part of 64kb
    //send file in chunks
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  
  .listen(5000)