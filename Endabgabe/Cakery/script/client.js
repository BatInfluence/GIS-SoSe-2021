"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Abgabe;
(function (Abgabe) {
    let url = "https://gis-sose2021.herokuapp.com";
    let u;
    let r;
    let query;
    let meineRezepte = document.getElementById("meineRezepte"); //Ausgabefeld in "MeineRezepte"
    let allleRezepte = document.getElementById("container-reciepe"); //Ausgabe der Rezepte in DIV "container-reciepe"
    //Registration & Login
    document.getElementById("registration").addEventListener("click", clickRegistration);
    document.getElementById("submit").addEventListener("click", clickLogin);
    document.getElementById("delete").addEventListener("click", clickDelete);
    async function clickLogin() {
        handleRequest(0);
    }
    async function clickRegistration() {
        handleRequest(1);
    }
    async function clickDelete() {
        handleRequest(2);
    }
    async function handleRequest(type) {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        query = new URLSearchParams(formData);
        if (type == 0) {
            url += "/login" + "?" + query.toString(); //Stringumwandlung 
            let response = await fetch(url); //Wartet auf die URL 
            let responseText = await response.text();
            console.log(responseText);
            let loginAnswer = JSON.parse(responseText); //JSON Okjekt wird erstellt
            //Soll überprüft werden, ob Userdaten richtig eingegeben wurden, falls ja Weiterleitung zu AlleRezepte, falls nein Fehlermeldung 
            if (loginAnswer.error != null) {
                meineRezepte.innerHTML = loginAnswer.error; //wird in DIV ausgegeben
                console.log("ALERT: Woops, maybe try another passwort or username!");
            }
            else if (loginAnswer.message != null) {
                window.open("../AlleRezepte.html");
                meineRezepte.innerHTML = loginAnswer.message;
            }
        }
        else if (type == 1) {
            url += "/registration" + "?" + query.toString(); //zu string umwandeln 
            let response = await fetch(url); //auf url warten      //antwort wartet auf die Server url 
            let responseText = await response.text(); //json okject erstellen
            console.log(responseText);
        }
        else {
            url += "/delete" + "?" + query.toString();
            let response = await fetch(url);
            let responseText = await response.text();
            console.log("DELETET: User (" + u + ")\nURL: " + url);
            document.getElementById("output").innerHTML += responseText + "\n\n";
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
    //MeineRezepte
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
            document.getElementById("meineRezepte").innerHTML += responseString + "\n"; //Anzeigen der Rezepte auf MeineRezepte:
        }
    }
    //AlleRezepte
    //Anzeigen der Rezepte auf AlleRezepte:
    document.getElementById("container-reciepe").addEventListener("click", showReciepe);
    function showReciepe() {
        handleRequestShowReciepe();
    }
    async function handleRequestShowReciepe() {
        let formData = new FormData(document.forms[0]);
        window.onload = handleRequestShowReciepe; //window.onload → Rezepte werden sofort angezeigt 
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "/container-reciepe" + "?" + query.toString(); //Url in String umwandeln
        let response = await fetch(url); //auf url warten
        let responseText = await response.text(); //json okject erstellen
        console.log("Rezepte werden angezeigt.");
        allleRezepte.innerHTML = responseText; //Die server antwort soll innerhalb dem HTML ausgegeben werden 
    }
    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow() {
        handleRequestShowReciepeWindow();
    }
    async function handleRequestShowReciepeWindow() {
        window.open();
        for (let index = 0; index < array.length; index++) { //wenn Rezept-Kachel angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
            const element = array[index];
        }
    }
    //FavoritenButton für Meme:
    document.getElementById("meme").addEventListener("click", showMeme);
    function showMeme() {
        window.open("../Meme.html");
    }
    //Anzeigen der Favoriten-Rezepte:
    //Button-Click-Eventlistener bei AlleRezepte → soll zu Speicherung/Anzeige des Rezeptes auf Favoriten-Seite führen
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=client.js.map