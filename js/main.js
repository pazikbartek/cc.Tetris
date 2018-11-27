const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;
const piksel = 20;
c.scale(piksel, piksel);
const fps = 2;
//TO DO: Tablica z kolorami dla poszczególnych klocków

let arena;
let klocek;
let score;

const setup = () => {
    arena = new Arena();
    klocek = new Klocek();
    score = new Score();

    setInterval(odswiez, 1000 / fps);
    // odswiez();

}

const odswiez = () => {
    klocek.ruch();
    // arena.odswiez(klocek);
    if (klocek.kolizja()) {
        arena.odswiez(klocek);
        klocek = new Klocek();
    }
    rysuj();
}

const rysuj = () => {
    c.fillStyle = 'black';
    c.fillRect(0, 0, cw, ch);
    klocek.rysuj();
    arena.rysuj();
}

window.onload = setup;

document.addEventListener('keydown', checkKey);

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       klocek.ruch1(-1);
    }
    else if (e.keyCode == '39') {
       // right arrow
       klocek.ruch1(1);
    }

}
