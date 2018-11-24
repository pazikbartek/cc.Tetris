const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const cw = canvas.scrollWidth;
const ch = canvas.scrollHeight;
const piksel = 10;
c.scale(piksel, piksel / 2);
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
}

window.onload = setup;
