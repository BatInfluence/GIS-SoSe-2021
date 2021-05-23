"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    let weiterleitungsziel;
    let localStorageKey;
    let benutzesArray;
    let parts;
    //Aufgabe 2.5 → Anfang
    let allParts;
    async function loadJSON(_url) {
        let response = await fetch(_url);
        console.log("Load JSON", response);
        allParts = await response.json();
        console.log(allParts.auswahl);
        console.log(allParts.zusatz);
        console.log(allParts.groeße);
    }
    loadJSON("https://batinfluence.github.io/GIS-SoSe-2021/Scripting/2.5/data.json");
    //LocalStorage wird an Server gesendet
    async function sendLocalStorage(_url) {
        let localArray = JSON.parse(localStorage.getItem("localStorageKey")); //HÄÄ? HOW? Hier muss der LocalStorage Key rein
        let query = new URLSearchParams(localArray);
        _url = _url + "?" + query.toString();
        await fetch(_url);
        let response = await fetch(_url);
        let serverResponse = await response.json();
        console.log("Server: ", response);
        await fetch(_url);
        let serverOutput = document.createElement("p");
        if (serverResponse.error == undefined) {
            serverOutput.innerText = "message: " + serverResponse.message;
        }
        else {
            serverOutput.innerText = "Error: " + serverResponse.error;
        }
    }
    sendLocalStorage("https://gis-communication.herokuapp.com");
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
    /*function createObj(): void {
        parts = JSON.parse(trankJSON);
    }
    */
    async function loadPage() {
        console.log(document.title);
        if (document.title == "Zusatz") { //Weiterleitung zu Sizeseite
            showPossibilities(parts.zusatz);
            weiterleitungsziel = "size.html";
            localStorageKey = "Zusatz";
            benutzesArray = parts.zusatz;
            //Anzeige von Bildern
        }
        if (document.title == "Size") { //Weiterleitung zu Gesamtseite
            showPossibilities(parts.groeße);
            weiterleitungsziel = "gesamt.html";
            localStorageKey = "Size";
            benutzesArray = parts.groeße;
        }
        if (document.title == "Trankmixerei") { //Weiterleitung zu Zusatzseite
            showPossibilities(parts.auswahl);
            weiterleitungsziel = "zusatz.html";
            localStorageKey = "Trankmixerei";
            benutzesArray = parts.auswahl;
        }
        // Aufgabe 2
        let selectionPreview = document.getElementById("showSelection");
        //Wenn Auswahl getroffen, aus localStorage nehmen und in "gesamt.html" einfügen
        if (parts.auswahl) {
            selectionPreview.appendChild(createImage(localStorage.getItem("Trankmixerei")));
        }
        else {
            selectionPreview.appendChild(createImage("./img/none.png"));
        }
        if (parts.zusatz) {
            selectionPreview.appendChild(createImage(localStorage.getItem("Zusatz")));
        }
        else {
            selectionPreview.appendChild(createImage("./img/none.png"));
        }
        if (parts.groeße) {
            selectionPreview.appendChild(createImage(localStorage.getItem("Size")));
        }
        else {
            selectionPreview.appendChild(createImage("./img/none.png"));
        }
        function createImage(_src) {
            let img = document.createElement("img");
            img.src = _src;
            return img;
        }
    }
    loadPage();
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map