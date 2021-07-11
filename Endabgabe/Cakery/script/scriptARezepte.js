"use strict";
var Abgabe;
(function (Abgabe) {
    //AlleRezepte
    let url = "https://gis-sose2021.herokuapp.com";
    let query;
    let allleRezepte = document.getElementById("container-reciepe"); //Ausgabe der Rezepte in DIV "container-reciepe"
    //FavoritenButton für Meme:
    document.getElementById("meme").addEventListener("click", showMeme);
    function showMeme() {
        window.open("Meme.html"); //FUNKTIONIERT!!
    }
    //Anzeigen der Rezepte auf AlleRezepte:
    document.getElementById("container-reciepe").addEventListener("click", showReciepe);
    function showReciepe() {
        handleRequestShowReciepe();
    }
    async function handleRequestShowReciepe() {
        window.onload = handleRequestShowReciepe; //window.onload → Rezepte werden sofort angezeigt 
        // tslint:disable-next-line: no-any
        url += "/container-reciepe" + "?" + query.toString(); //Url wird in String umgewandelt
        let response = await fetch(url); //Warten auf Url
        let responseText = await response.text();
        console.log("Rezepte werden angezeigt.");
        allleRezepte.innerHTML = responseText; //Serverantwort innehralb der HTML
    }
    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow() {
        handleRequestShowReciepeWindow();
    }
    async function handleRequestShowReciepeWindow() {
        window.open("RezeptAnzeige.html");
        //wenn Rezept-Name angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
        //WIE LADE ICH DA JETZT DIE JEWEILIGEN REZEPTE REIN??! Das muss ja innerhalb der server.ts Datei gemacht werden, aber WIE? 
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=scriptARezepte.js.map