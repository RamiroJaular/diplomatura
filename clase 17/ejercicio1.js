const items = document.getElementsByClassName('item');

function cambiarvisibilidad() {
    const item = items[1];
    if (item.style.visibility == '') {
        item.style.visibility = 'hidden'
    } else {
        item.style.visibility = ''
    }
}

setInterval (cambiarvisibilidad, 1000);