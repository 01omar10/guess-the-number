import { Component } from '@angular/core';
import { Try } from './try.ts'

@Component({
    selector: "game",
    templateUrl: 'app/mainComponent/main.component.html',
    styleUrls: ['app/mainComponent/main.component.css']
})

export class MainComponent {
    MAX_DIGITS = 4;

    nro: string;
    tries: Try[] = [];
    gameEnded = false;
    currentTry: Try = {
        tryStr: "",
        asserts: 0,
        positions: 0
    };;



    constructor() {
        this.nro = this.getRandomNumber();
    }

    getRandomNumber() {
        let digits = "0123456789";
        let randNro = "";

        for (let i = 0; i < 4; i++) {
            let maxIndex = digits.length;
            let index = Math.floor(Math.random() * maxIndex);

            randNro = randNro.concat(digits[index]);
            digits = digits.replace(digits[index], '');
        }

        return randNro;
    }

    saveTry() {
        let aux = this.currentTry;
        this.tries.push(aux);
    }

    checkNro() {
        this.clearTry();

        for (let i = 0; i < this.currentTry.tryStr.length; i++) {
            let index = this.nro.indexOf(this.currentTry.tryStr[i]);
            if (index > -1) {
                this.currentTry.asserts++;

                if (index == i) {
                    this.currentTry.positions++;
                }
            }
        }

        this.tries.push(this.currentTry);

        this.checkWinner();
    }

    checkWinner() {
        if (this.currentTry.asserts == this.MAX_DIGITS && this.currentTry.positions == this.MAX_DIGITS) {
            this.gameEnded = true;
            alert("You won!");
        }
    }

    public clearTry() {
        this.currentTry.asserts = 0;
        this.currentTry.positions = 0;
    }

}
