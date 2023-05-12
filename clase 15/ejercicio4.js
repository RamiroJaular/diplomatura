function allparrafos(){
    const allparraf= document.getElementsByTagName('p');

    const num = allparraf.length;

    alert (`hay ${num} elementos p en este elemento`)
}

function caja1p () {
    const caja1p = document.getElementById('caja1');
    const caja1parrafos = caja1p.getElementsByTagName('p');
    const num = caja1parrafos.length;
    alert (`hay ${num} elementos p en este elemento`)

}

function caja2p () {

    const caja2p = document.getElementById('caja2');
    const caja2parrafos = caja2p.getElementsByTagName('p');
    const num = caja2parrafos.length;
    alert (`hay ${num} elementos p en este elemento`)
}