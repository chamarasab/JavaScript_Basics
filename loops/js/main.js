function array(end) {
    var numbers = new Array(end);                                                   //define array of 100 integers
    let sum = 0;
    
    for (let i = 0; i < end; i++) {
        numbers[i] = i + 1;                                                         //initilzing the array 1 - 100
        sum += i + 1;                                                               //calculating total each
    }
    
    for (let i = 0; i < numbers.length; i++) {
        document.getElementById('txtOutput').innerHTML += numbers[i] + " ";         //printing array elements
    }

    document.getElementById('txtTotal').innerHTML = sum;                            //printing total amount
}