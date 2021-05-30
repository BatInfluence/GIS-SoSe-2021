"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let btn = document.getElementById("submit");
    btn.addEventListener("click", click);
    async function click() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gis-example.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url, { method: "get" });
        let responseText = await response.text();
        console.log(responseText);
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map