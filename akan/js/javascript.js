
// limits for data inputs

// function checkDate(){
//   var find=document.getElementById("dob");
//   if(find.value<=0 || find.value>31){
//     alert('Invalid Date of Birth Entered');
 
//  return false;
//   }
//  };
 
//  function checkMonth(){
//   var con=document.getElementById("mob");
//   if(con.value<=0 || con.value>12){
//     alert('Invalid Month Entered');
//  return false;
//   }
//  };
//  function checkYear(){
//   var year=document.getElementById("yob");
//   if(year.value<=1800 || year.value>2030){
//     alert('Invalid year Entered');
//      return false;
//   }
//  }





function dayOfWeek() {

  var century =parseInt( document.getElementById("cen").value);
  var year = parseInt(document.getElementById("yob").value);
  var month = parseInt(document.getElementById("mob").value);
  var day = parseInt(document.getElementById("dob").value);
  var calculate =
  (((century / 4) -
  2 * century -
  1) +
  (5 * year / 4) +
  (26 * (month + 1) / 10) +
  day) %
  7;
  var calculateA= Math.round(calculate);
  var gender = document.getElementById("gender").value.toLowerCase();
  
  if (calculateA == 0 && gender =="female"){
  
  document.getElementById("result").innerHTML = "Your Name is Akosua.";
  }
  if (calculateA == 0 && gender == "male"){
  
  document.getElementById("result").innerHTML = "Your Name is Kwasi.";
  }
  if (calculateA == 1 && gender == "female"){
  
  document.getElementById("result").innerHTML = "Your Name is Adwoa.";
  }
  if (calculateA == 1 && gender =="male"){
  
  document.getElementById("result").innerHTML = "Your Name is Kwadwo.";
  }
  if (calculateA == 2 && gender =="female")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Abenaa .";
  }
  if (calculateA == 2 && gender =="male")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Kwabena.";
  }
  if (calculateA == 3 && gender =="female")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Akua.";
  }
  if (calculateA == 3 && gender =="female")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Kwaku.";
  }
  if (calculateA == 4 && gender =="female")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Yaa.";
  }
  if (calculateA == 4 && gender =="male")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Yaw.";
  }
  if (calculateA == 5 && "gender" =="female")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Afua.";
  }
  if (calculateA == 5 && gender =="male")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Kofi.";
  }
  if (calculateA == 6 && gender =="female")
  {
  
  document.getElementById("result").innerHTML = "Your Name is Ama.";
  }
  if (calculateA == 6 && gender =="male")
  {
  
  document.getElementById("result").innerHTML = "Your Name is kwame.";
  }
  
  }
  