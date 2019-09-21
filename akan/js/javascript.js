
document.querySelector("#cool");
function alert1(){
alert("Isn't this cool?");
};



function checkDate(){
  var find=document.getElementById("dob");
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
function checkYear(){
  var year=document.getElementById("yob");
  if(year.value<=1800 || year.value>2030){
    alert('Invalid year Entered');
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
    var calculateA= math.round(calculate);
    if (calculateA == 0 && document.getElementById("female").value==="Female");{
      e.preventDefault()
      document.getElementById("result").innerHTML = "Your Name is Akosua.";
    }  if (calculateA == 0 && document.getElementById("male").value==="Male");{
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwasi.";
  }
  if (calculateA == 1 && document.getElementById("female").value==="Female");{
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Adwoa.";
  }
  if (calculateA == 1 && document.getElementById("male").value==="Male");{
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwadwo.";
  }
  if (calculateA == 2 && document.getElementById("female").value==="Female");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Abenaa .";
  }
  if (calculateA == 2 && document.getElementById("male").value==="Male");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwabena.";
  }
  if (calculateA == 3 && document.getElementById("female").value==="Female");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Akua.";
  }
  if (calculateA == 3 && document.getElementById("male").value==="Female");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kwaku.";
  }
  if (calculateA == 4 && document.getElementById("female").value==="Female");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Yaa.";
  }
  if (calculateA == 4 && document.getElementById("male").value==="Male");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Yao.";
  }
  if (calculateA == 5 && document.getElementById("female").value==="Female");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Afua.";
  }
  if (calculateA == 5 && document.getElementById("male").value==="Male");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Kofi.";
  }
  if (calculateA == 6 && document.getElementById("female").value==="Female");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is Ama.";
  }
  if (calculateA == 6 && document.getElementById("male").value==="Male");
  {
    e.preventDefault()
    document.getElementById("result").innerHTML = "Your Name is kwame.";
  }
