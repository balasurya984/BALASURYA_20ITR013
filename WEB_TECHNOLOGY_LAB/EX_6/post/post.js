var http=require('http');
var url=require('url');
var querystring=require('querystring');

http.createServer(function(req,res){
    
    
    var dat='';
    req .on('data',function(data){
        dat+=data;
    })
    req.on('end',function(){
        var query = querystring.parse(dat);
        var name = query.name;
        var mail = query.email;
        var phone=query.mobile;
        var username=query.uname;
        var passw=query.pass;
        var eve=query.val;
        var gen=query.radio;
        var cit=query.city;
        
        var table=`<div>
          <h2>USING POST METHOD<h2>
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
        res.end();
      res.write(table);
    })


}).listen(3050);
console.log("Server Running")