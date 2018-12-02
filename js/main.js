const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');

const piksel = 20;
const fps = 60;// frames per second, plynnosc animacji

const kolorki = [';', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'fuchsia', 'cyan', 'lime', 'gold'];
const ramka = 0.05; // grubość ramki
const kolorramki = 'white'; //kolor ramki

let cw = canvas.width;
let ch = canvas.height;
let trudnosc = 1000; //co ile milisekund ma spadać klocek sam z siebie
let arena;
let klocek;
let score;
let czas = 0;

const setup = () => {
    resize();
    document.getElementById('wynik').innerText = `Punkty: 00`; // wyzerowanie wyniku
    arena = new Arena();
    klocek = new Klocek();
    score = new Score();
    setInterval(odswiez, 1000 / fps);
}


const odswiez = () => {

    if (klocek.kolizja() || arena.kolizja2(klocek)) {
        arena.odswiez(klocek);
        klocek = new Klocek();
        arena.sprawdzenie();
    }
    rysuj();

    if (performance.now() - czas > trudnosc) {
        czas = performance.now();
        klocek.spadanie();
    }

}

const rysuj = () => {
    // c.fillStyle = 'black';
    c.clearRect(0, 0, cw, ch);
    c.fillStyle = "rgba(0, 0, 0, 0.7)";
    c.fillRect(0, 0, cw, ch);
    arena.rysuj();
    klocek.rysuj();
}

const resize = () => {
    let size = (window.innerHeight - (0.07 * window.innerHeight) - 60);
    size = size - (size % 100);
    canvas.height = size;
    ch = canvas.height;
    c.scale(piksel, piksel);
}

window.onload = setup;

window.addEventListener('resize', setup, false);

document.addEventListener('keydown', (e) => {

    e = e || window.event;

    if (e.keyCode == '38') {
        if (arena.kolizjaPoObrocie(klocek)) {
            klocek.x = klocek.x - (klocek.x + klocek.dlugosc - arena.tablica[0].length);
            klocek.obrot()
        }
        else if (arena.kolizjaPoObrocie2(klocek)) {
            klocek.x = klocek.x + (-klocek.x);
            klocek.obrot();
        }
        else {
            klocek.obrot();
        }
    }
    else if (e.keyCode == '40') {
        // down arrow
        klocek.spadanie();
    }
    else if (e.keyCode == '37' && arena.kolizjaPrawo(klocek)) {
        // left arrow
        klocek.ruch(-1);
    }
    else if (e.keyCode == '39' && arena.kolizjaLewo(klocek)) {
        // right arrow
        klocek.ruch(1);
    }

});


