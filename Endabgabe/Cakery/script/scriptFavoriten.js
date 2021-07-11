"use strict";
var Abgabe;
(function (Abgabe) {
    //Anzeigen der Favoriten-Rezepte:
    //Button-Click-Eventlistener bei AlleRezepte → soll zu Speicherung/Anzeige des Rezeptes auf Favoriten-Seite führen
    //Rezepte nach draufklicken anzeigen:
    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow() {
        handleRequestShowReciepeWindow();
    }
    async function handleRequestShowReciepeWindow() {
        window.open("RezeptAnzeige.html");
        //wenn Rezept-Kachel angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=scriptFavoriten.js.map