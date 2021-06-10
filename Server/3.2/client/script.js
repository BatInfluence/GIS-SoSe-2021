"use strict";
var Aufgabe3_1;
(function (Aufgabe3_1) {
    let url = "https://gissose2021heroku.herokuapp.com/";
    let type = "";
    let htmlSubmit = document.getElementById("htmlsubmit");
    let jsonSubmit = document.getElementById("jsonsubmit");
    let responseDIV = document.getElementById("responseDIV");
    let buttonSend = document.getElementById("button2");
    buttonSend.addEventListener("click", handleSubmit);
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
        alert(response.text);
        if (type == "/json") {
            let responseJSON = JSON.parse(responseText);
            console.log(responseJSON);
        }
        else if (type == "/html") {
            responseDIV.innerHTML = "";
            let frag = document.createRange().createContextualFragment(responseText);
            responseDIV.appendChild(frag);
        }
        url = "https://gissose2021heroku.herokuapp.com/";
    }
})(Aufgabe3_1 || (Aufgabe3_1 = {}));
//# sourceMappingURL=script.js.map