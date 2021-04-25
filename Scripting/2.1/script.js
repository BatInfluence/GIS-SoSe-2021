"use strict";
/*function a1(): void {
    let x: string = "Alles";
    console.log(x);
    func1();
    console.log("Logo!");
}

a1();

function func1(): void {
    console.log("Klar?");
}*/
// → In der ersten Zeile steht "Alles", in der zweiten "Klar?" und in der dritten Zeile steht "Logo!".
/*
let x: string = "Hallo";
console.log(x);
func1(x);
console.log(x);
func2();
func3();
console.log(x);

function func1(y: string): void { //Leerzeichen hat gefehlt
    y = "Bla";
    console.log(y); //y überschreibt x
}

function func2(): void {
    let x: string = "Blubb";
    console.log(x);
}

function func3(): void {
    x = "Test"; //x wird neu definiert
}
*/
/*
function multiply(): void { //5.a
    let x: number = parseInt(prompt("Enter the first number: ")); //Warum wird das nicht angezeigt?
    let y: number = parseInt(prompt("Enter the second number: "));
    let z: number = x * y;
    console.log(z);
}
multiply();
*/
/*
function max(): void { //b
    let x: number = parseInt(prompt("Enter the first number: "));
    let y: number = parseInt(prompt("Enter the second number: "));

    if (x > y) {
        console.log(x);
    }
    if (y > x) {
        console.log(y);
    }
}
max();
*/
/*
function c(): void { //c
    let a: number = 1;
    let factor: number = 0;
    while (a <= 100) {
       factor = factor + a++;
    }
    console.log(factor);
}
c();
*/
/*
function d(): void { //d
    for (let index: number = 1; index <= 10; index++) { //nochmal überarbeiten, weiß nicht, ob Math.random richtig angewandt wurde.
        console.log(Math.floor(Math.random() * 100));
    }
}
d();
*/
/*
function factorial(): void { //e
    let n: number = parseInt(prompt("Enter number: "));
    let fakultaet: number = 1;
    for (let index: number = 1; index <= n; index++) { //nochmal debuggen und überprüfen, ob for-Schleife stimmmt.
        if (n < 1) {
            console.log(1);
        }
        console.log(fakultaet = fakultaet * index);
    }
}
factorial();
*/
/*
function leapyears(): void { //f

    let tage: number = 0;
    let ende: number = 2021;
    for (let jahr: number = 1990; jahr <= ende; jahr++) {
        if (jahr % 4 == 0) {
            ++tage;
        }

        if (jahr % 100 == 0 && jahr % 400 != 0) {
            --tage;
        }
    }
    console.log("AB 1990 gab es " + tage, "Schaltjahre");
}
leapyears();
*/
/*
function zeichen(): void { //6.a //funktioniert noch nicht
    let z: String = "";
    for (let zeile: number = 0; zeile < 7; zeile++) {

        for (let spalte: number = 0; spalte <= 7; spalte++) {
            z += "#";
        }
        z += "\n";
    }
    console.log(z);

}
zeichen();
*/
/*
function fizzbuzz(): void { //b
    for (let index: number = 0; index <= 100; index++) {
        if (index % 3 == 0) {
            console.log("Fizz");
        }
        if (index % 5 == 0 && index ! % 3 == 0) {
            console.log("Buzz");
        }
        if (index % 3 == 0 && index % 5 == 0) { //c
            console.log("FizzBuzz");
        }
        console.log(index);
    }
}
fizzbuzz(); //Methode aufrufen nicht vergessen
*/
/*
function schachbrett(): void { //d
    let board: String = "";
    for (let zeilen: number = 1; zeilen <= 7; zeilen++) {
        for (let character: number = 1; character <= 8; character++) {
            if ((zeilen + character) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
}
schachbrett();
*/
/*
function schachbrettZwei(): void {

    let num: number = parseInt(prompt("Enter the the height: "));
    let board: String = "";
    for (let zeilen: number = 1; zeilen <= num; zeilen++) {
        for (let character: number = 1; character <= num; character++) {
            if ((zeilen + character) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board);
}
schachbrettZwei();
*/
//# sourceMappingURL=script.js.map