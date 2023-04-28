const http = require('http')
//set up server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  else if (req.url === '/about') {
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    //after the two for loop, get to about page also not letting others to access the page
    res.end('About Page')
  }
  else {res.end('Error Page')}
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})