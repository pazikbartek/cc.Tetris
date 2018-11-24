class Klocek {

    losujRodzaj() {
        // TO DO: więcej typów klocków każdy z inną cyferką
        return [
            [1, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ]

    }

    constructor() {
        this.tablica = this.losujRodzaj();
        this.x = 14; // na to trzeba będzie jeszcze znaleźć lepszy sposób żeby klocek sie tworzył równo na środku 
        this.y = 0;

    }

    ruch() {
        //to jest na opadanie klocka, trzeba dopisać ruchy na boki i szybsze spadanie po wcisnieciu strzałki w dół (można rozważyć stworzenie osobnej metody na to)
        this.y++;
    }

    rysuj() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                switch (this.tablica[j][i]) {
                    case 0:
                        break;
                    case 1:
                        c.fillStyle = 'red';
                        c.fillRect(this.x + i, this.y + j, 1, 1);
                        break;
                }
            }
        }

    }
    kolizja() {
        //  TO DO: to jest tak dla picu napisane, trzeba to poprawić tak żeby patrzył nie tylko na x ale tez na aktualny kształt tablicy i ignorował zera
        if (this.y > 28) {
            return true;
        }
    }

    obrot() {
        // TO DO: Obracanie tego co siedzi w this.tablica, to moze byc trudne zostawćie to sobie na deser
    }
}