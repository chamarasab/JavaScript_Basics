function volume(length) {
    volume = length * length * length;
    document.getElementById('txtVolumeOutput').innerHTML = volume;
}
function checkInput(input) {
    let x = input;
    var output = "";
    if (isNaN(x)|| x<1 || x>10) {
        output = "Input not valid";
    } else {
        output = "Input Ok";
    }
    document.getElementById('txtVolumeOutput').innerHTML = output;
}

function validateLogin(params) {
    let x = document.forms["loginForm"]["exampleInputEmail1"].value;
    if (x=="") {
        alert("Email must be filled out.");
        return false;
    } else {
        alert("Okay");
    }
}