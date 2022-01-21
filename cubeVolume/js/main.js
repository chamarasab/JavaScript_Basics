function volume(length) {
    let l = parseInt(length);
    let vol = l * l * l;
    document.getElementById('txtVolume').value = vol;
}