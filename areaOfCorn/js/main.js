function area(r,h) {
    let length = Math.sqrt(r * r + h * h);
    let volume = Math.PI * r * r * h / 3;
    let area = Math.PI * r * (r + length);

    //alert("Volume : " + volume + "\nArea : " + area);

    document.getElementById('txtAreaOutput').innerHTML = "Volume : " + volume;
    document.getElementById('txtVolumeOutput').innerHTML = "Area : " + area;
}