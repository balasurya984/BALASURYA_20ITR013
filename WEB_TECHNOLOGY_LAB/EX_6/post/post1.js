var http = require('http');
var url = require('url');
var querystring = require('querystring');

function table(q) {
    return `<table border="1">
    <tr>
        <td>Name</td>
        <td>${q.name}</td>
    </tr>
    <tr>
        <td>Mail</td>
        <td>${q.email}</td>
    </tr>
    <tr>
        <td>Mobile</td>
        <td>${q.mobile}</td>
    </tr>
    
    <tr>
        <td>Uswrname</td>
        <td>${q.uname}</td>
    </tr>
    <tr>
        <td>Password</td>
        <td>${q.pass}</td>
    </tr>
    <tr>
        <td>Event</td>
        <td>${q.val}</td>
    </tr>
    <tr>
        <td>Gender</td>
        <td>${q.radio}</td>
    </tr>
    <tr>
        <td>City</td>
        <td>${q.city}</td>
    </tr>
    </table>`

}
http.createServer((req, res) => {

        res.writeHead(200, { "content-Type": "text/html" })
        var body = '';
        req.on('data', (data) => body += data);
        req.on('end', () => {
            var q = querystring.parse(body);
            console.log(q)
            var t = table(q)
            res.write('<h1>POST Method</h1>')
            res.write(t);
            res.end();
        });

}).listen(5050)
console.log("Server is running")
















































































































































