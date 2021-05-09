"use strict";
var Aufgabe1;
(function (Aufgabe1) {
    function setupButtons() {
        let b1 = document.createElement("button");
        b1.style.height = "20px";
        b1.style.width = "90px";
        b1.addEventListener("click", newRectangle);
        document.body.appendChild(b1);
        let b2 = document.createElement("button");
        b2.style.height = "20px";
        b2.style.width = "90px";
        b2.style.marginLeft = "80px";
        b2.addEventListener("click", reloadPage);
        document.body.appendChild(b2);
    }
    setupButtons();
    function newRectangle() {
        drawRectangle(2);
        function randomRect() {
            let randomRect = document.createElement("div");
            randomRect.style.width = Math.random() * 100 + "px";
            randomRect.style.height = Math.random() * 100 + "px";
            randomRect.style.backgroundColor = getRandomColor();
            document.body.append(randomRect);
        }
        function getRandomColor() {
            let alles = "0123456789ABCDEF"; //alle Farben
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += alles[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function drawRectangle(anzahl) {
            for (let e = 0; e <= anzahl; e++) {
                randomRect();
            }
        }
    }
    newRectangle();
    function reloadPage() {
        setTimeout("location.reload(true);");
    }
})(Aufgabe1 || (Aufgabe1 = {}));
function drawRectangle() {
    for (let index = 0; index <= 5; index++) {
        let div1 = document.createElement("div");
        div1.style.color = (Math.random() * 100).toString();
        div1.style.height = (Math.random() * 100).toString() + "px";
        div1.style.width = (Math.random() * 100).toString() + "px";
        div1.style.position = (Math.random() * 100).toString() + "px";
        document.body.appendChild(div1);
    }
}
drawRectangle();
//# sourceMappingURL=script.js.map