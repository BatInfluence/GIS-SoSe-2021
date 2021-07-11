"use strict";
var Abgabe;
(function (Abgabe) {
    //MeineRezepte
    let url = "https://gis-sose2021.herokuapp.com";
    let r;
    let meineRezepte = document.getElementById("meineRezepte"); //Ausgabefeld in "MeineRezepte"
    //Neues Zutatenfeld erstellen: Funktioniert yay
    document.getElementById("btn-newZutat").addEventListener("click", Zutat);
    function Zutat() {
        let newZ = document.createElement("input");
        newZ.innerText = "Neue Zutat...";
        var vorhandenesObjekt = document.getElementById("divZutat");
        vorhandenesObjekt.appendChild(newZ);
    }
    //Hochladen von neuem Rezept:
    document.getElementById("btn-hochladen").addEventListener("click", hochladen);
    function hochladen() {
        handleRequestHochladen(0);
    }
    async function handleRequestHochladen(type) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        if (type == 0) {
            url += "/btn-hochladen" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Receipe Sent", r);
            console.log("URL:", url);
            meineRezepte.innerHTML += responseString + "\n"; //Anzeigen der Rezepte auf MeineRezepte:
        }
    }
    //Rezept löschen & restliche Rezepte anzeigen:
    document.getElementById("btn-delete").addEventListener("click", deleteReciepe);
    function deleteReciepe() {
        handleRequestDelete(0);
    }
    async function handleRequestDelete(type) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        if (type == 0) {
            url += "/btn-delete" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Receipe Deleted", r);
            meineRezepte.innerHTML += responseString + "\n"; //Anzeigen der Rezepte auf MeineRezepte
        }
    }
    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow() {
        handleRequestShowReciepeWindow();
    }
    async function handleRequestShowReciepeWindow() {
        window.open("RezeptAnzeige.html");
        // for (let index = 0; index < array.length; index++) { //wenn Rezept-Kachel angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
        //     const element = array[index];
        // }
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=scriptMRezepte.js.map