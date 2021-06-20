"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let formData;
    let url = "https://gis-sose2021.herokuapp.com";
    let type = "";
    let submit = document.getElementById("submit");
    let feedback = document.getElementById("feedback");
    submit.addEventListener("click", submitText);
    feedback.addEventListener("click", giveFeedback);
    function submitText() {
        // console.log("erfolgt"); 
        type = "/json";
        updateInputs();
        handleRequest();
    }
    function giveFeedback() {
        // console.log("piupiu");
        type = "/html";
        handleRequest();
    }
    async function handleRequest() {
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
    function updateInputs() {
        let name = document.getElementsByTagName("input")[0].value;
        let lastname = document.getElementsByTagName("input")[1].value;
        let registration = parseInt(document.getElementsByTagName("input")[2].value);
        let text = document.getElementsByTagName("input")[3].value;
        s = { name, lastname, registration, text };
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map