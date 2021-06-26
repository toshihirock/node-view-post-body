const http = require('http');
const url = require('url');
const port = 80 

var server = http.createServer(function(req, res) {
  var url_parse = url.parse(req.url, true);
  console.log(url_parse);
  //console.log(req.url)

  if (req.method == 'GET') {
      console.log('GET')
      res.end();
  }
  if (req.method == 'POST') {
    console.log('POST')
    var body = '';
    req.on('data', function(chunk) {
        body += chunk;
    });

    req.on('end', function() {
      console.log(body);
      res.end();
    });
 }
}).listen(port);

console.log(`start nodejs listening on port ${port}`)
