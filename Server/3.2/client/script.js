"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let buttonSend = document.getElementById("button2");
    buttonSend.addEventListener("click", click); //Hääää? warum wird der EventListener nicht erstellt?
    async function click() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-sose2021.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log(responseText);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map