function area(radius) {
    let r = parseInt(radius);
    let area = 3.14 * r * r;
    document.getElementById('txtOutput').value = area;
}