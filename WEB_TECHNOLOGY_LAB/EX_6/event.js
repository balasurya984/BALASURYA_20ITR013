function name1()
{
    var sname=document.form.name.value;
    let regex=/^[A-z_\.]*$/;
    var result=regex.test(sname);
    console.log(result)

    if(sname==null||sname==""||sname.length==0)
    {
        document.getElementById("n").innerHTML="Name should not be blank"; 
        return false;
    }
    else if(result==true)
    {
        document.getElementById("n").innerHTML="Valid Name";
        return true;   
    }
    else
    {
        if(result==false)
        {
        document.getElementById("n").innerHTML="Name should be only uppercase or lowercase letters";
        return false;
        }
    }
}

function email1()
{
    var email=document.form.email.value;
    let mail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailval=mail.test(email)
    console.log(emailval)

    if(email==null||email==""||email.length==0)
    {
        document.getElementById("mail").innerHTML="Email should not be blank";
        return false;
    }
    else if(emailval==true)
    {
        document.getElementById("mail").innerHTML="Valid Email ID";
        return true;   
    }
    else
    {
        if(emailval==false){
            document.getElementById("mail").innerHTML="Give a email satisfying conditions";
            return false;
        }
    } 
}

function number1()
{
    var num=document.form.mobile.value;
    let mob=/^\d{10}$/;
    var mobile_no=mob.test(num)
    console.log(mobile_no)

    if(num==null||num==""||num.length==0)
    {
        document.getElementById("number").innerHTML="Mobile no. should not be blank";
        return false;
    }
    else if(mobile_no==true)
    {
        document.getElementById("number").innerHTML="Valid Mobile no.";
        return true;
    }
    else
    {
        if(mobile_no==false){
            document.getElementById("number").innerHTML="Enter Mobile no. correctly";
            return false;
        }
    }
}

function username1()
{
    var user=document.form.uname.value;
    let usname=/^[a-z0-9\@\!\#\$\~\_]+$/;
    var usename=usname.test(user)
    console.log(usename)

    if(user==null||user==""||user.length==0)
    {
        document.getElementById("username").innerHTML="Username should not be blank";
        return false;
    }
    else if(usename==true)
    {
        if(user.length<8 || user.length>10)
        {
            document.getElementById("username").innerHTML="Enter Username within 8 to 10 characters";
            return false;
        }
        else
        {
            document.getElementById("username").innerHTML="Valid Username";
            return true;
        }
    }
    else
    {
        if(usename==false)
        {
            document.getElementById("username").innerHTML="Enter a valid username";
            return false;
        }
    }
}

function password1()
{
    var passw=document.form.pass.value;
    let passwo=/^[a-zA-Z0-9]+$/;
    var passwor=passwo.test(passw)
    console.log(passwor)

    if(passw==null||passw==""||passw.length==0)
    {
        document.getElementById("pas").innerHTML="Password should not be blank";
        return false;
    }
    else if(passwor==true)
    {
        if(passw.length<10 || passw.length>12)
        {
            document.getElementById("pas").innerHTML="Enter Password within 10 to 12 characters";
            return false;
        }
        else
        {
            document.getElementById("pas").innerHTML="Valid Password";
            return true;
        }
    }
    else
    {
        if(passwor==false)
        {
            document.getElementById("pas").innerHTML="Password should not contain special characters";
            return false;
        }
    }
}
function event1()
{
    var c1=document.getElementById("cb1").checked;
    var c2=document.getElementById("cb2").checked;
    var c3=document.getElementById("cb3").checked;
    if(c1==true||c2==true||c3==true)
    {
        document.getElementById("event").innerHTML="Event Selected Successfully"
    }
    else{
        document.getElementById("event").innerHTML="Please select atleast one event"
    }
}



function gender1()
{   
   
    if(document.form.radio[0].checked==false&&document.form.radio[1].checked==false)
    {
        alert("Select Your Gender")
        return false;
    }
    else{

    }


    var city1=document.getElementById("city")
    if(city1.value=="none")
    {
        alert("Please select your city");
            return false;
        }
    else{

    }
   
   
}