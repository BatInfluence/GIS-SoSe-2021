"use strict";
/*namespace Aufgabe1 {

    function setupButtons(): void {
        let b1: HTMLElement = document.createElement("button");
        b1.style.height = "20px";
        b1.style.width = "90px";

        b1.addEventListener("click", newRectangle);
        document.body.appendChild(b1);

        let b2: HTMLElement = document.createElement("button");
        b2.style.height = "20px";
        b2.style.width = "90px";
        b2.style.marginLeft = "80px";

        b2.addEventListener("click", reloadPage);
        document.body.appendChild(b2);
    }
    setupButtons();

    function newRectangle(): void {
        drawRectangle(2);

        function randomRect(): void {
            let randomRect: HTMLDivElement = document.createElement("div");
            randomRect.style.width = Math.random() * 100 + "px";
            randomRect.style.height = Math.random() * 100 + "px";
    
    
            randomRect.style.backgroundColor = getRandomColor();
            document.body.append(randomRect);
    
        }

        function getRandomColor(): string {
            let alles: string = "0123456789ABCDEF"; //alle Farben
            let color: string = "#";
            for (let i: number = 0; i < 6; i++) {
                color += alles[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        function drawRectangle(anzahl: number): void {
            for (let e: number = 0; e <= anzahl; e++) {
                randomRect();
            }
    
        }
    }
    newRectangle();

    function reloadPage(): void {
        setTimeout("location.reload(true);");
    }
}
*/
var Aufgabe2;
(function (Aufgabe2) {
    function createTrankDiv(_part, _index) {
        // wrapping div
        let div = document.createElement("div");
        div.classList.add("trank");
        // image to be displayed
        let img = document.createElement("img");
        img.src = _part.image;
        div.appendChild(img);
        // button
        let button = document.createElement("button");
        button.innerText = "Select";
        // Möglichkeit 1: innere Funktion
        button.addEventListener("click", handleSelection);
        // Möglichkeit 2: äußere Funktion 
        button.addEventListener("click", handleSelection2);
        button.dataset.index = _index.toString();
        //opens new site
        button.addEventListener("click", handleSelection3);
        div.appendChild(button);
        return div;
        // innere Funktion, welche Durch ihre Positionierung innerhalb der createTrankDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
        function handleSelection(_e) {
            console.log("innere Funktion", _part);
        }
    }
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im auswahl Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e) {
        let target = _e.currentTarget;
        let index = Number(target.dataset.index);
        console.log("äußere Funktion", Aufgabe2.parts.auswahl[index]);
    }
    function handleSelection3(_e) {
        let target2 = _e.currentTarget;
        let index = Number(target2.dataset.index);
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
        }
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createTrankDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(Aufgabe2.parts.auswahl); //Trankauswahl wird gezeigt
})(Aufgabe2 || (Aufgabe2 = {}));
var Aufgabe4;
(function (Aufgabe4) {
    function convertIntoObj() {
        for (let index = 0; index < array.length; index++) {
        }
    }
    convertIntoObj();
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map