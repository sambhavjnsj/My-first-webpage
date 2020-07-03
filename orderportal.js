function details()
{
    var x=document.forms["Personaldetail"]["fname"].value;
    var y=document.forms["Personaldetail"]["lname"].value;
    var z=document.forms["Personaldetail"]["mail"].value;
    var w=document.forms["Personaldetail"]["phone"].value;
    document.getElementById("a1").innerHTML="Welcome "+x+" "+y+" to Haldiram's , It's nice to meet you. ...";
    
}  
function validatephone()
{
    var phoneNumber= document.forms["Personaldetail"]["phone"].value;
    var re3= /^\d{10}$/;

    if (re3.test(phoneNumber))
    {
        document.getElementById("phonePrompt").style.color="Green";
        document.getElementById("phonePrompt").innerHTML="<b>Valid</b>";
        return true;
    }
    else{
        document.getElementById("phonePrompt").style.color="Red";
        document.getElementById("phonePrompt").innerHTML="<b>Enter 10 digit no.</b>";
        return false;
    }
}
function validatefirstname()
{
var fname=document.forms["Personaldetail"]["fname"].value;
var re1=/^[a-zA-Z\s\'\-]{2,15}$/;

if (re1.test(fname))
{
    document.getElementById("firstname").style.color="Green";
        document.getElementById("firstname").innerHTML="<b>Valid</b>";
        return true;
}
else{
    document.getElementById("firstname").style.color="Red";
    document.getElementById("firstname").innerHTML="<b>Enter 2-15 characters</b>";
    return false
}
}
function validatelastname()
{
    var lname=document.forms["Personaldetail"]["lname"].value;
    var re2=/^[a-zA-Z\s\'\-]{2,10}$/;
    if (re2.test(lname))
{
    document.getElementById("lastname").style.color="Green";
        document.getElementById("lastname").innerHTML="<b>Valid</b>";
        return true;
}
else{
    document.getElementById("lastname").style.color="Red";
    document.getElementById("lastname").innerHTML="<b>Enter 2-10 characters</b>";
    return false
}
}

function calcorder()
{
    var m1=document.getElementById("q1").value;
    var m2=document.getElementById("q2").value;
    var m3=document.getElementById("q3").value;
    var m4=document.getElementById("q4").value;
    var m5=document.getElementById("q5").value;
    var m6=document.getElementById("q6").value;
    var m7=document.getElementById("q7").value;
    var m8=document.getElementById("q8").value;
    var total=(150*m1+120*m2+220*m3+180*m4+120*m5+190*m6+200*m7+420*m8)
    document.getElementById("total").innerHTML="Your Bill Amount is "+total+"/-"+" (+50Rs PM CARE fund)";
    var Totalamt= (total + 50);
    document.getElementById("Totalamt").innerHTML="Total Amount = "+Totalamt+"/-";
}
function alert()
{
    alert("kuch nhi mil rha baitho ghar par shanti se");
}