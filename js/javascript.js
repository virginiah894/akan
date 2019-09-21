document.querySelector("#cool");
function alert1(){
alert("isn't this cool?");
prompt("Are you ready?");
};

function checkDate(){
  var find = document.getElementById("dob");
  if(find.value<=0 || find.value>31){
    alert('Invalid Date of Birth Entered');
 return false;
  }
};

function checkMonth(){
  var con=document.getElementById("mob");
  if(con.value<=0 || con.value>12){
    alert('Invalid Month Entered');
 return false;
  }
};
// function to calculate the day of week
function dayOfWeek(){
  var century=parseInt(document.getElementById("cen"));
  var year=parseInt(document.getElementById("yob"));
  var month=parseInt(document.getElementById("mob"));
  var day=parseInt(document.getElementById("dob"));
  var calculate=(((century/4)-2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
  if(calculate===0){
    console.log("Sunday");
  }
  else if(calculate===1){
    console.log("Monday");
  }
  else if(calculate===2){
    console.log("Monday");
  }
  else if(calculate===3){
    console.log("Wednesday");
  }
  else if(calculate===4){
    console.log("Thursday");
  }
  else if(calculate===5){
    console.log("Friday");
  }
  else if(calculate===6){
    console.log("Saturday");
  }

  document.getElementById("result").innerHTML= "Your Name is"+calculate;
} 

  // Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7

var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
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
