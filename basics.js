function time() {
    document.getElementById('demo').innerHTML = Date();
    //Date(); is a build in JS-Function.
}
function text() {
    document.getElementById('txtName').innerHTML = "Chamara Ekanayake";
    //passing value "Chamara Ekanayake" to the html component id got 'txtName'
}
function popup() {
    window.alert("Javascript Alert Pop-Up");
}
function sum(fn,sn) {
    var sum = parseInt(fn) + parseInt(sn);
    window.alert("Total = " + sum);
    //document.getElementById('txtSum').innerHTML = sum;
}