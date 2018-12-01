const canvas = document.querySelector('#canvas');
const c = canvas.getContext('2d');
const cw = canvas.width;
const ch = canvas.height;
const piksel = 20;
c.scale(piksel, piksel);
const fps = 60;// frames per second, plynnosc animacji
const trudnosc = 1000; //co ile milisekund ma spadać klocek sam z siebie
//TO DO: Tablica z kolorami dla poszczególnych klocków
const kolorki = [';', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'fuchsia', 'cyan', 'white', 'gold']


let arena;
let klocek;
let score;
let czas = 0;



const setup = () => {
    arena = new Arena();
    klocek = new Klocek();
    score = new Score();
    setInterval(odswiez, 1000 / fps);
    odswiez();
}


const odswiez = () => {
    sprawdzenie()
    // arena.odswiez(klocek);
    if (klocek.kolizja() || arena.kolizja2(klocek)) {
        arena.odswiez(klocek);
        // console.log(arena.tablica);
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
    arena.rysuj();
    klocek.rysuj();
    arena.rysuj();
}

window.onload = setup;
document.addEventListener('keydown', (e) => {

    e = e || window.event;

    if (e.keyCode == '38'){
        if(arena.kolizjaPoObrocie(klocek)){
            klocek.x--;
            klocek.obrot()
        }
        else if(arena.kolizjaPoObrocie2(klocek)){
            klocek.x++
            klocek.obrot();
        }
        else{
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


