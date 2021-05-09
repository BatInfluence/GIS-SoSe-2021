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
/*
function factorial( n: number): number { //e
    
    let fakultaet: number = 1;
    for (let index: number = 1; index <= n; index++) { //nochmal debuggen und überprüfen, ob for-Schleife stimmmt.
        if (n < 1) {
            return (1); 
        }
        fakultaet = fakultaet * index;
    }
    return fakultaet;
}
console.log(factorial(4));
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
    for (let zeile: number = 1; zeile <= 7; zeile++) {
        for (let ausgabe: number = 0; ausgabe <= (zeile - 1); ausgabe++) {
            z += "#";
        }
        z += "\n";
    }
    console.log(z);
    console.log("gefixt");
}
zeichen();


function fizzbuzz(): void { //b
    for (let index: number = 0; index <= 100; index++) {
        let fizzbuzz: boolean = false;
        if (index % 3 == 0 && index % 5 == 0) { //c
            console.log("FizzBuzz");
            fizzbuzz = true;
        }
        if (index % 3 == 0) {
            console.log("Fizz");
        }
        if (index % 5 == 0 && index! % 3 == 0) {
            console.log("Buzz");
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

namespace Aufgabe2_2 {

    function min(..._num: number[]): number {
        let min: number = Infinity;
        for (let i: number = 0; i < _num.length; i++) {
            if (min > _num[i]) {
                min = _num[i];
            }
        }
        return min;
    }
    min(123, 45, 23, 12);


    function isEven(_input: number): boolean {
        if (_input == 0) return true;
        if (_input == 1) return false;

        let result: boolean;
        if (_input > 0)
            result = isEven(_input - 2);
        if (_input < 0)
            result = isEven(_input + 2);
        return result;
    }
    isEven(4);


    class Student {

        vorname: string;
        name: string;
        alter: number;
        studiengang: string;

        constructor(vorname: string, name: string, alter: number, studiengang: string) {
            this.name = name;
            this.vorname = vorname;
            this.alter = alter;
            this.studiengang = studiengang;
        }

        public showInfo(): void {
            console.log("Name: " + this.name, "Vorname: " + this.vorname, "Alter: " + this.alter, "Studiengang: " + this.studiengang);
        }
    }
    let s1: Student = new Student("Paul-Franz", "Leon", 20, "Ingenierswirtschaft");

    console.log(s1);

    let s2: Student = new Student("Wasser", "Mariana", 19, "Gesundheitswissenschaften");

    console.log(s2);

    let s3: Student = new Student("Kroemer", "Jakob", 24, "WIrtschaftsinformatik");

    console.log(s3);

    let studentArray: Student[] = [];
    studentArray.push(s1);
    console.log(s1.name);

    studentArray.push(s2);
    console.log(s2.studiengang);

    studentArray.push(s3);
    console.log(s3.alter);

    studentArray.push(new Student("Mustermann", "Max", 21, "Psychologie"));
    /*
        s1.showInfo();
        s2.showInfo();
        s3.showInfo();
    */



    function backwards(_arr: number[]): number[] {
        let arrnew: number[] = [];

        for (let i: number = _arr.length - 1; i > 0; --i) {
            arrnew.push(_arr[i]);
        }
        return arrnew;
    }
    backwards([20]);


    function join(_a: number[], _b: number[]): number[] {
        let joined: number[] = [];
        for (let i: number = 0; i < _a.length; i++) {
            joined.push(_a[i]);
        }
        for (let i: number = 0; i < _b.length; i++) {
            joined.push(_b[i]);
        }
        return joined;
    }
    join([10, 20], [20, 49]);


    function split(_arr1: number[], _index: number, _indextwo: number): number[] {
        let saveArr: number[] = [];

        if (_index < 0 || _indextwo > _arr1.length - 1) {
            console.log("Miau!");
        } else {
            for (let i = _index; i < _indextwo; i++) {
                saveArr.push(_arr1[i]);
            }
        }
        return saveArr;
    }
    split([12, 23, 79], 12, 42);


    let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById("myFirstCanvas");
    let context: CanvasRenderingContext2D = canvas.getContext("2d");

    context.beginPath(); //sky
    context.rect(0, 0, 500, 400); // (x, y, width, height)
    context.fillStyle = "rgb(175,238,238)";
    context.fill();

    context.beginPath(); //cloud1
    context.rect(450, 100, 100, 50); // (x, y, width, height)
    context.fillStyle = "rgb(248,248,255)";
    context.fill();

    context.beginPath(); //cloud2
    context.rect(350, 120, 130, 70); // (x, y, width, height)
    context.fillStyle = "rgb(248,248,255)";
    context.fill();

    context.beginPath(); //cloud3
    context.rect(150, 120, 130, 20); // (x, y, width, height)
    context.fillStyle = "rgb(248,248,255)";
    context.fill();

    context.beginPath(); //cloud4
    context.rect(150, 70, 80, 80); // (x, y, width, height)
    context.fillStyle = "rgb(248,248,255)";
    context.fill();

    context.beginPath(); //cloud5
    context.rect(100, 90, 70, 80); // (x, y, width, height)
    context.fillStyle = "rgb(248,248,255)";
    context.fill();

    context.beginPath(); //cloud6
    context.rect(80, 100, 70, 40); // (x, y, width, height)
    context.fillStyle = "rgb(248,248,255)";
    context.fill();

    context.beginPath(); //grass
    context.rect(0, 300, 500, 100); // (x, y, width, height)
    context.fillStyle = "green";
    context.fill();

    context.beginPath(); //treestomp
    context.rect(430, 160, 20, 140);
    context.fillStyle = "brown";
    context.fill();

    //treeleaves
    var centerY: number = canvas.height / 2;
    var radius: number = 60;
    context.beginPath();
    context.arc(440, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "green";
    context.fill();

    context.beginPath(); //roof
    //var centerX: number = canvas.width / 2;
    //var centerY: number = canvas.height / 2;
    //var radius: number = 50;
    context.beginPath();
    context.arc(100, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "blue";
    context.fill();

    context.beginPath(); //house
    context.rect(50, 200, 100, 100); // (x, y, width, height)
    context.fillStyle = "red";
    context.fill();


    class Rect {
        randomX: number;
        randomY: number;
        randomWidth: number;
        randomHeight: number;

        constructor() {
            this.randomX = Math.random() * 100;
            this.randomY = Math.random() * 100;
            this.randomWidth = Math.random() * 100;
            this.randomHeight = Math.random() * 100;
        }

        public drawRect(): void {
            context.beginPath();
            context.fillRect(this.randomX, this.randomY, this.randomWidth, this.randomHeight);
        }


    }
    class DrawRect {
        public static drawRandom(a: number): void {
            let sammlung: Rect[] = [];
            for (let u = 0; u <= a; u++) {
                sammlung.push(new Rect());
            }
            for (let v = 0; v < sammlung.length - 1; v++) {
                sammlung[v].drawRect();
            }
        }
    }
    DrawRect.drawRandom(5);
}





