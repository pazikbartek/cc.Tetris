class Arena {

    constructor() {
        this.rozmiar_x = cw / piksel;
        this.rozmiar_y = ch / piksel;
        this.tablica = new Array(this.rozmiar_y);
        for (let i = 0; i < this.rozmiar_y; i++) {
            this.tablica[i] = new Array(this.rozmiar_x); // tak się tworzy tablice dwu wymiarowa
        }

        for (let i = 0; i < this.rozmiar_y; i++) {  //wypełniamy ją zerami które reprezentują że nie ma w tym miejscu narazie nic
            for (let j = 0; j < this.rozmiar_x; j++) {
                this.tablica[i][j] = 0;
    
            }
        }
    }


    odswiez(klocek) { // Ta metoda ma zmodyfikować tablice po kolizji
        for (let i = 0; i < klocek.dlugosc; i++) {
            for (let j = 0; j < klocek.szerokosc; j++) {
                if (this.tablica[klocek.y + j][klocek.x + i] == 0) {
                    this.tablica[klocek.y + j][klocek.x + i] = klocek.tablica[j][i];
                }
            }
        }
    }


    sprawdzenie() {
        
//         let tresc = 0;
//         let i = this.rozmiar_y - 1;
// for(i = 0; i>0; ++i) {
//     let isRowFull = this.tablica[i].includes(0);
//     let isRowEmpty = this.tablica.every( item => item === 0);
//   if(isRowEmpty) {
//     console.log ("mam jakieś zero");
//     break;
//   }
//   else {
//     console.log ("buuu");
//     break;
//   }
// } 
     
     console.log(score);
    
     document.getElementById('wynik').innerText = `Wynik: ${this.score}`;
     console.log(score);
    // let i = this.rozmiar_y.length - 1;
    // let j = this.rozmiar_x.length- 1;
    //     for(i; i>0; i++){
    //         for(j; j>0; j++){
    //        let isRowFull = this.tablica[i].includes(1) ; // zwraca true jeżeli rząd zawiera w sobie choć jedno zero
    //         let isRowEmpty = this.tablica.every( item => item === 0); // zwraca true jezeli caly rzad zawiera zero

    //         if(isRowEmpty) {
    //             console.log("każdy jest pusty");
    //             break};
    //         if(isRowFull){
    //             this.score +=10;
    //             console.log("dzialam");
    //             // TODO : 
    //             // 1. fcja czyszcząca cały rząd 
    //             // 2. przerysowanie całej tablicy, żeby ewentualne rzędy na górze opadły
    //             this.tablica[i].forEach( el => el = 0);
    //             //rysuj?         
    //             rysuj();
    //         }
    //         }
    //     }
    //    document.getElementById('wynik').innerText = `00${this.score}`.slice(-3);

}
    rysuj() { //To się przyda jak już coś będzie w tablicy żeby narysowąć klocki które już istnieją
        for (let i = 0; i < arena.rozmiar_y; i++) {
            for (let j = 0; j < arena.rozmiar_x; j++) {
                switch (arena.tablica[i][j]) {
                    case 0:
                        break;
                    default:
                        c.fillStyle = kolorki[arena.tablica[i][j]];
                        c.fillRect(j, i, 1, 1);
                        break;
                }
            }
        }
    }


    kolizja2(klocek) {
        //TO DO: sprawdzenie czy cos jest w indeksie w którym jest aktualnie klocek
        for (let y = 0; y < klocek.szerokosc; y++) {
            for (let x = 0; x < klocek.dlugosc; x++) {
                if (klocek.tablica[y][x] !== 0 && arena.tablica[y + klocek.y][x + klocek.x] !== 0 && arena.tablica[y + klocek.y][x + klocek.x] !== undefined) {
                    if ((y + klocek.y) == 0 || (y + klocek.y) == 1) {
                        return false;
                    }
                    klocek.y--;
                    return true;
                }
            }
        }
    }

    kolizjaPrawo(klocek){ // kolizja z prawymi bokami klockow
        for(let y=0; y<klocek.szerokosc; y++){
            for (let x=0; x<klocek.dlugosc; x++){
                if(klocek.tablica[y][x]!=0 && arena.tablica[klocek.y+y][klocek.x+x-1]!=0){
                     return false;
                }
            }   
        }
        return true;
    }


    kolizjaLewo(klocek){ // kolizja z lewymi bokami klockow

        for(let y=0; y<klocek.szerokosc; y++){
            for (let x=0; x<klocek.dlugosc; x++){
                if(klocek.tablica[y][x]!=0 && arena.tablica[klocek.y+y][klocek.x+x+1]!=0){
                    return false
                }
            }
        }
        return true;
    }    
}