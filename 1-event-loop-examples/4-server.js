const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  //write on the page
  res.end('Hello World')
})

//event loop keep listening
//listen to port 5000
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})