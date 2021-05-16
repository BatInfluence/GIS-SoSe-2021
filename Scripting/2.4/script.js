"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    let weiterleitungsziel;
    let localStorageKey;
    let benutzesArray;
    let parts;
    createObj();
    function createTrankDiv(_part, _index) {
        // wrapping div
        let div = document.createElement("div");
        div.classList.add("trank");
        // image to be displayed
        let img = document.createElement("img");
        img.src = _part.image;
        // Möglichkeit 2: äußere Funktion 
        img.addEventListener("click", handleSelection2);
        img.dataset.index = _index.toString(); //dataset → assoz. Array, String to String zuweisung
        div.appendChild(img);
        return div;
    }
    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im auswahl Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e) {
        let target = _e.currentTarget; // auf currentTarget liegt EventListener
        let index = Number(target.dataset.index);
        console.log(index);
        console.log("äußere Funktion", benutzesArray[index]); // bekomme ausgewählten Trank-Nummer zurück, parts.auswahl → ausgewählter Trank
        localStorage.setItem(localStorageKey, benutzesArray[index].image); //Bild von potion
        window.open(weiterleitungsziel, "_self");
    }
    function showPossibilities(_parts) {
        let wrapper = document.getElementById("selectionWrapper");
        for (let i = 0; i < _parts.length; i++) {
            let div = createTrankDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    function createObj() {
        parts = JSON.parse(Aufgabe4.trankJSON);
    }
    function loadPage() {
        console.log(document.title);
        if (document.title == "Zusatz") {
            showPossibilities(parts.zusatz);
            weiterleitungsziel = "size.html";
            localStorageKey = "Zusatz";
            benutzesArray = parts.zusatz;
            //Anzeige von Bildern
        }
        if (document.title == "Size") {
            showPossibilities(parts.groeße);
            weiterleitungsziel = "gesamt.html";
            localStorageKey = "Size";
            benutzesArray = parts.groeße;
        }
        if (document.title == "Trankmixerei") {
            showPossibilities(parts.auswahl);
            weiterleitungsziel = "zusatz.html";
            localStorageKey = "Trankmixerei";
            benutzesArray = parts.auswahl;
        }
    }
    loadPage();
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map