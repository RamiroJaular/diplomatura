const items = document.getElementsByClassName('item');

function cambiarvisibilidad(numitem){
    const item = items[numitem]
    if(item.style.visibility == '') {
        item.style.visibility = 'hidden'
    } else {item.style.visibility = ''
}
}

function cambiardisplay(numitem){
    const item = items[numitem]
    if(item.style.display == '') {
        item.style.display = 'none'
    } else {item.style.display = ''
}
}