"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let url = "https://gis-sose2021.herokuapp.com";
    let type = "";
    let htmlSubmit = document.getElementById("htmlsubmit");
    let jsonSubmit = document.getElementById("jsonsubmit");
    let responseDIV = document.getElementById("responseDIV");
    jsonSubmit.addEventListener("click", function () {
        type = "/json";
        handleSubmit();
    });
    htmlSubmit.addEventListener("click", function () {
        type = "/html";
        handleSubmit();
    });
    async function handleSubmit() {
        let formData = new FormData(document.forms[0]);
        url += type;
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        //url += "?" + query.toString();
        let response = await fetch(url += "?" + query.toString());
        let responseText = await response.text();
        alert(responseText);
        if (type == "/json") {
            let responseJSON = JSON.parse(responseText);
            console.log(responseJSON);
        }
        else if (type == "/html") {
            responseDIV.innerHTML = responseText;
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map