const http = require('http');
const port = 8090;

const server = http.createServer((req, res) => {
  res.end("Welcome to Womxn Build!")
});


server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
