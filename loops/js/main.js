/*function calculate(basic) {
    var total = 0;
    for (let i = 0; i <= basic; i++) {
        total += i;
        document.getElementById('txtOutput').innerHTML += i + " ";
    }
    document.getElementById('txtTotal').innerHTML += total;
    //let salary = parseInt(basic) + parseInt(allowance);

}
*/
function array(end) {
    var numbers = new Array(100);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
        sum += i + 1;
    }
    
    for (let i = 0; i < numbers.length; i++) {
        document.getElementById('txtOutput').innerHTML += numbers[i] + " ";
    }

    document.getElementById('txtTotal').innerHTML = sum;
}