var http = require('http');
var url = require('url');
http.createServer(function (req, res) 
{
    var a = url.parse(req.url,true);
    var query = a.query;
    var name = query.name;
    var mail = query.email;
    var phone=query.mobile;
    var username=query.uname;
    var passw=query.pass;
    var eve=query.val;
    var gen=query.radio;
    var cit=query.city;
    
    var table=`<div>
      <h2>GET METHOD</h2>
        <table border='1'>
        <tr>
            <td>Name</td>
            <td>${name}</td>
        </tr>
        <tr>
            <td>Mail</td>
            <td>${mail}</td>
        </tr>
        <tr>
            <td>Phonne</td>
            <td>${phone}</td>
        </tr>
        <tr>
            <td>Username</td>
            <td>${username}</td>
        </tr>
        <tr>
            <td>Password</td>
            <td>${passw}</td>
        </tr>
        <tr>
            <td>Event</td>
            <td>${eve}</td>
        </tr>
        <tr>
            <td>Gender</td>
            <td>${gen}</td>
        </tr>
        <tr>
            <td>City</td>
            <td>${cit}</td>
        </tr>
        </tr>
        </table>
    </div>`
    res.write(table);
    res.end();
}).listen(3030);
console.log("Server is running")