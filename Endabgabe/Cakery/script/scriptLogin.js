"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Abgabe;
(function (Abgabe) {
    let url = "https://gis-sose2021.herokuapp.com";
    let u;
    let query;
    let meineRezepte = document.getElementById("meineRezepte"); //Ausgabefeld in "MeineRezepte"
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
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=scriptLogin.js.map