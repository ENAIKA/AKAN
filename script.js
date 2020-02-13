
//varible declaration
var day = parseInt((document.getElementById("day").value);
var month = document.getElementById("month").value;
var year = document.getElementById("year").value;

//validation of year input

function myValidation() {
    if (!year.checkValidity()) {
      document.getElementById("display").innerHTML = year.validationMessage;
    } 
  } 
//my arrays
var female=[ Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama]; //sunday-saturday# sunday has index 0
var male=[Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];//sunday has index 0
/* #formula for finding day
Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7 
CC - is the century digits. For example 1989 has CC = 19

YY - is the Year digits (1989 has YY = 89)

MM -  is the Month

DD - is the Day of the month 

mod - is the modulus function ( % )*/ 





var weekday=(((cc/4)-2*month-1) +((5*year/4))+((26*(month + 1)/10))+DD)%7;
