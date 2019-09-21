
document.querySelector("#cool");
function alert1(){
alert("Isn't this cool?");
prompt("Are you ready?");
}



function checkDate(){
  var find=document.getElementById("dob");
  if(find.value<=0 || find.value>31){
    alert('Invalid Date of Birth Entered');
    messages.push("Enter a valid date  of birth");
 return false;
  }
}

function checkMonth(){
  var con=document.getElementById("mob");
  if(con.value<=0 || con.value>12){
    alert('Invalid Month Entered');
    Messages.push("Enter a valid month");
 return false;
  }
};
function checkYear(){
  var year=document.getElementById("yob");
  if(year.value<=1800 || year.value>2030){
    alert('Invalid year Entered');
    Messages.push("Enter a valid year");
 return false;
  }
};
function dayOfWeek(e) {
  e.preventDefault(); 
  var century = parseInt(document.getElementById("cen"));
  var year = parseInt(document.getElementById("yob"));
  var month = parseInt(document.getElementById("mob"));
  var day = parseInt(document.getElementById("dob"));
  var calculate =
    (century / 4 -
      2 * century -
      1 +
      (5 * year) / 4 +
      (26 * (month + 1)) / 10 +
      day) %
    7;
    var calculate1=math.round(calculate);
  if (calculate1 ==0 && document.getElementById("female") == Female);
  {e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Akosua.";
  }
  if (calculate1 == 0 && document.getElementById("male") ==Male);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwasi.";
  }
  if (calculate1== 1 && document.getElementById("female") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Adwoa.";
  }
  if (calculate1 == 1 && document.getElementById("male") == Male);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwadwo.";
  }
  if (calculate1 == 2 && document.getElementById("female") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Abenaa .";
  }
  if (calculate1 == 2 && document.getElementById("male") == Male);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwabena.";
  }
  if (calculate1== 3 && document.getElementById("female") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Akua.";
  }
  if (calculate1 == 3 && document.getElementById("male") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwaku.";
  }
  if (calculate1 == 4 && document.getElementById("female") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Yaa.";
  }
  if (calculate1 == 4 && document.getElementById("male") == Male);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Yao.";
  }
  if (calculate1 == 5 && document.getElementById("female") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Afua.";
  }
  if (calculate1== 5 && document.getElementById("male") == Male);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kofi.";
  }
  if (calculate1 == 6 && document.getElementById("female") == Female);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Ama.";
  }
  if (calculate1 == 6 && document.getElementById("male") == Male);
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is kwame.";
  }
};
