function array(end) {
    var numbers = new Array(end);                                                   //define array of 100 integers
    let sum = 0;
    let evenTotal = 0;
    
    for (let i = 0; i < end; i++) {
        numbers[i] = i + 1;                                                         //initilzing the array 1 - 100
        sum += numbers[i];                                                               //calculating total each
    }
    
    for (let i = 0; i < numbers.length; i++) {
        document.getElementById('txtOutput').innerHTML += numbers[i] + " ";         //printing array elements
    }

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            document.getElementById('txtEvenOutput').innerHTML += numbers[i] + " ";
            evenTotal += numbers[i];
        }
        
    }

    document.getElementById('txtTotal').innerHTML = sum;                            //printing total amount
    document.getElementById('txtEvenTotal').innerHTML = evenTotal;                  //printing total amount only even numbers
}