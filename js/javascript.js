document.querySelector("#cool");
function alert1(){
alert("isn't this cool?");
prompt("Are you ready?");
};

function check(){
  var find=parseInt(document.getElementById("dob"));
  if(find.value<=0 || find.value>31){
    alert('Invalid Date of Birth Entered');
 return false;
  }
}

function checkMonth(){
  var con= parseInt(document.getElementById("mob"));
  if(con.value<=0 || con.value>12){
    alert('Invalid Date of Birth Entered');
 return false;
  }
}
// function to calculate the day of week
function dayOfWeek(){
  Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
if()






};
//   var m=document.querySelector("#mon");
//   var t=document.querySelector("#tue");
//   var w=document.querySelector("#wed");
//   var t=document.querySelector("#thu");
//   var f=document.querySelector("#fri");
//   var sa=document.querySelector("#sat");
//   var gender=document.querySelector("#gen");
//   var print;
 
// if (sun=="Male"){
// print=kwasi;
// }
// else if(sun=="Female"){
//   print=Akosua;
// }
// document.querySelector("#Result").innerHTML=print;
// }
