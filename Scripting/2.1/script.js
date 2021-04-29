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
    let x: number = parseInt("Enter the first number: ");
    let y: number = parseInt("Enter the second number: ");
    let z: number = x * y;
    console.log(z);
}
multiply();
*/
/*
function max(): void { //b
    let x: number = parseInt("Enter the first number: ");
    let y: number = parseInt("Enter the second number: ");

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
function factorial() {
    let n = parseInt("Enter number: ");
    let fakultaet = 1;
    for (let index = 1; index <= n; index++) { //nochmal debuggen und überprüfen, ob for-Schleife stimmmt.
        if (n < 1) {
            return (1);
        }
        console.log(fakultaet = fakultaet * index);
    }
    return fakultaet;
}
factorial();
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
function zeichen() {
    let z = "";
    for (let zeile = 1; zeile <= 7; zeile++) {
        for (let ausgabe = 0; ausgabe <= (zeile - 1); ausgabe++) {
            z += "#";
        }
        z += "\n";
    }
    console.log(z);
    console.log("gefixt");
}
zeichen();
function fizzbuzz() {
    for (let index = 0; index <= 100; index++) {
        let fizzbuzz = false;
        if (index % 3 == 0 && index % 5 == 0) { //c
            console.log("FizzBuzz");
            fizzbuzz = true;
        }
        if (index % 3 == 0) {
            console.log("Fizz");
        }
        if (index % 5 == 0 && index % 3 == 0) {
            console.log("Buzz");
        }
        console.log(index);
    }
}
fizzbuzz(); //Methode aufrufen nicht vergessen
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

    let num: number = parseInt("Enter the the height: ");
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
var Aufgabe2_1;
(function (Aufgabe2_1) {
    function min() {
        //Wie kann ich mehrere Zahlen eintippen ?
        let num = parseInt("Enter numbers: ");
        return (Math.min(num));
    }
    min();
    function isEven() {
        let x = parseInt("Enter number: ");
        if (x % 2 == 0) {
            return true;
        }
        else {
            return false;
        }
        if (x == NaN) {
            return x == NaN - 2;
        }
    }
    isEven();
    let s1 = {
        name: "Paul-Franz",
        vorname: "Leon",
        alter: 20,
        studiengang: "Ingenieurswirtschaft"
    };
    console.log(s1);
    let s2 = {
        name: "Wasser",
        vorname: "Mariana",
        alter: 19,
        studiengang: "Gesundheitswissenschaften"
    };
    console.log(s2);
    let s3 = {
        name: "Kroemer",
        vorname: "Jakob",
        alter: 24,
        studiengang: "Wirtschaftsinformatik"
    };
    console.log(s3);
    let studentArray = [];
    studentArray.push(s1);
    console.log(s1.name);
    studentArray.push(s2);
    console.log(s2.studiengang);
    studentArray.push(s3);
    console.log(s3.alter);
    studentArray.push({ name: "Mustermann", vorname: "Max", alter: 21, studiengang: "Psychologie" });
    function showInfo() {
        return null;
    }
})(Aufgabe2_1 || (Aufgabe2_1 = {}));
//# sourceMappingURL=script.js.map