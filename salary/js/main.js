function calculate(basic) {
    var allowance = 0;
    if (basic > 80000) {
        allowance = basic * 25 / 100;
    } else if ((basic > 40000) && (basic < 80000)) {
        allowance = basic * 20 / 100;
    } else if (basic < 40000) {
        allowance = basic * 10 / 100;
    }

    let salary = parseInt(basic) + parseInt(allowance);
    document.getElementById('txtOutput').innerHTML = salary;
}