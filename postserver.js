var http = require('http');
var url = require('url');
var querystring = require('querystring');
var sql = require('./mysql.js');

var server = http.createServer(function (request, response) {
  if (request.method == 'GET') {
    var callback = function(queryData){
    response.writeHead(200, {"Content-Type": "text/plain"});
    // if parameter is provided
     if (queryData) {
       response.end(queryData);
      } else {
       response.end("Hello World\n");
     }}

    sql.open();
    sql.query(callback);
    sql.close();
    //var queryData = url.parse(request.url, true).query;

    
  };


    if (request.method == 'POST') {
        var body = '';
        request.on('data', function (data) {
            body += data;
            // if body >  1e6 === 1 * Math.pow(10, 6) ~~~ 1MB
            // flood attack or faulty client
            // (code 413: request entity too large), kill request
            if (body.length > 1e6) {
                response.writeHead(413,
                    {'Content-Type': 'text/plain'}).end();
                request.connection.destroy();
            }
        });
        request.on('end', function () {
            var POST = querystring.parse(body);
            sql.open();
            sql.insert(POST.firstname,POST.lastname);
            sql.close();
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end('Hello ' + POST.firstname + ' '+ POST.lastname + '\n');


// now to get the different parameters use// POST.<field name> e.g. POST.user
        });
    }
});
// Listen on port 3000, IP defaults to 127.0.0.1 (localhost)
server.listen(3000);
