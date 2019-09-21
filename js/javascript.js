document.querySelector("#cool");
function alert1() {
  alert("isn't this cool?");
  prompt("Are you ready?");
}

function checkDate() {
  var find = document.getElementById("dob");
  if (find.value <= 0 || find.value > 31) {
    alert("Invalid Date of Birth Entered");
    return false;
  }
}

function checkMonth() {
  var con = document.getElementById("mob");
  if (con.value <= 0 || con.value > 12) {
    alert("Invalid Month Entered");
    return false;
  }
}
function checkYear() {
  var year = document.getElementById("yob");
  if (year.value <= 1800 || year.value > 2030) {
    alert("Invalid year Entered");
    return false;
  }
}
// function to calculate the day of week
function dayOfWeek() {
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
  if (calculate === 0 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Akosua.";
  }
  if (calculate === 0 && document.getElementById("male") === Male);
  {
    document.getElementById("result").innerHTML = "Your Name is Kwasi.";
  }
  if (calculate === 1 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Adwoa.";
  }
  if (calculate === 1 && document.getElementById("male") === Male);
  {
    document.getElementById("result").innerHTML = "Your Name is Kwadwo.";
  }
  if (calculate === 2 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Abenaa .";
  }
  if (calculate === 2 && document.getElementById("male") === Male);
  {
    document.getElementById("result").innerHTML = "Your Name is Kwabena.";
  }
  if (calculate === 3 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Akua.";
  }
  if (calculate === 3 && document.getElementById("male") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Kwaku.";
  }
  if (calculate === 4 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Yaa.";
  }
  if (calculate === 4 && document.getElementById("male") === Male);
  {
    document.getElementById("result").innerHTML = "Your Name is Yao.";
  }
  if (calculate === 5 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Afua.";
  }
  if (calculate === 5 && document.getElementById("male") === Male);
  {
    document.getElementById("result").innerHTML = "Your Name is Kofi.";
  }
  if (calculate === 6 && document.getElementById("female") === Female);
  {
    document.getElementById("result").innerHTML = "Your Name is Ama.";
  }
  if (calculate === 6 && document.getElementById("male") === Male);
  {
    document.getElementById("result").innerHTML = "Your Name is kwame.";
  }

  cument.getElementById("result").innerHTML = "Your Name is" + calculate;
}

// document.querySelector("#Result").innerHTML=print;
// }
