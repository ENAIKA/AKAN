// var maleArray = [Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame];//sunday has index 0

var weekday = function () {
    var d = new Date();
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    d.setDate(parseInt(day));
    d.setMonth(parseInt(month) - 1);
    d.setFullYear(parseInt(year));
    return d.getDay();
i}
// function centuryFromYear(year) {
//     var x = Math.floor(year/100) + 1;
//     return x; 
// }


function akanFemale() {
    var femaleArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //sunday-saturday# sunday has index 0
    var gender = document.getElementById("rad1").value;
    if (gender === "0") {
        if (weekday() === 0) {
            return "Your Akan name is " + femaleArray[0];
        }
        else if (weekday() ===1) {
            return "Your Akan name is " + femaleArray[1];

        } else if (weekday() === 2) {
            return "Your Akan name is " + femaleArray[2];
        }
        else if (weekday() === 3) {
            return "Your Akan name is " + femaleArray[3];
        }
        else if (weekday() === 4) {
            return "Your Akan name is " + femaleArray[4];
        }
        else if (weekday() === 5) {
            return "Your Akan name is " + femaleArray[5];
        }
        else {
            return "Your Akan name is " + femaleArray[6];
        }
        
    }
    //else { return "male"; }
    //     if (check() === 0) {
    //         return "Your Akan name is "  + femaleArray[0];
    //     }
    //     else if (check() = 1) {
    //         return "Your Akan name is "  + femaleArray[1];

    //     } else if (check() === 2) {
    //         return "Your Akan name is "  + femaleArray[2];
    //     }
    //     else if (check() === 3) {
    //         return "Your Akan name is "  + femaleArray[3];
    //     }
    //     else if (check() === 4) {
    //         return "Your Akan name is "  + femaleArray[4];
    //     }
    //     else if (check() === 5) {
    //         return "Your Akan name is "  + femaleArray[5];
    //     }
    //     else {
    //         return "Your Akan name is " + femaleArray[6];
    //     }
    // }
}

function output() {
    document.getElementById("display").innerHTML = akanFemale();
}
