"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    let parts;
    createObj();
    function createTrankDiv(_part, _index) {
        // wrapping div
        let div = document.createElement("div");
        div.classList.add("trank");
        // image to be displayed
        let img = document.createElement("img");
        img.src = _part.image;
        img.addEventListener("click", handleSelection);
        div.appendChild(img);
        // Möglichkeit 1: innere Funktion
        img.addEventListener("click", handleSelection);
        //opens new site
        img.addEventListener("click", handleSelection2);
        div.appendChild(img);
        return div;
        // innere Funktion, welche Durch ihre Positionierung innerhalb der createTrankDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
        function handleSelection(_e) {
            console.log("innere Funktion", _part);
        }
    }
    function handleSelection2(_e) {
        //window.open("zusatz.html", "_blank");
        //???? hab das in der HTML gelöst, bekomme das hier nicht hin
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createTrankDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(parts.auswahl); //Trankauswahl wird gezeigt
    function createObj() {
        parts = JSON.parse(Aufgabe4.trankJSON);
    }
    if (localStorage.click == "pictures/Lifepotion.png") {
        console.log(localStorage.getItem("pictures/Lifepotion.png"));
    }
    if (localStorage.click == "pictures/Manapotion.png") {
        console.log(localStorage.getItem("pictures/Lifepotion.png"));
    }
    //localStorage.setItem("auswahl", JSON.stringify(parts));
    //console.log(localStorage.getItem("auswahl"));
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map