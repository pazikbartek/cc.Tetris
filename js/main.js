const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;
const piksel = 20;
c.scale(piksel, piksel);
const fps = 60;// frames per second, plynnosc animacji
const trudnosc = 1000; //co ile milisekund ma spadać klocek sam z siebie
//TO DO: Tablica z kolorami dla poszczególnych klocków

let arena;
let klocek;
let score;
let czas = 0;


const setup = () => {
    arena = new Arena();
    klocek = new Klocek();
    score = new Score();
    setInterval(odswiez, 1000 / fps);
    // odswiez();

}

const odswiez = () => {
    // arena.odswiez(klocek);
    if (klocek.kolizja()) {
        arena.odswiez(klocek);
        klocek = new Klocek();
    }
    rysuj();

    if (performance.now() - czas > trudnosc) {
        czas = performance.now();
        klocek.spadanie();
    }

}

const rysuj = () => {
    c.fillStyle = 'black';
    c.fillRect(0, 0, cw, ch);
    klocek.rysuj();
    arena.rysuj();
}

window.onload = setup;

document.addEventListener('keydown', (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
        klocek.spadanie();
    }
    else if (e.keyCode == '37') {
        // left arrow
        klocek.ruch(-1);
    }
    else if (e.keyCode == '39') {
        // right arrow
        klocek.ruch(1);
    }

});


