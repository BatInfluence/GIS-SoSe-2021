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
        updateInputs();
        handleRequest(0);
    }
    function giveFeedback() {
        // console.log("piupiu");
        handleRequest(1);
    }
    async function handleRequest(type) {
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query = new URLSearchParams(formData);
        if (type == 0) {
            url += "/send" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Data Sent", s);
            console.log("URL:", url);
            document.getElementById("response").innerHTML += responseString + "\n\n";
        }
        else if (type == 1) {
            url += "/receive" + "?" + query.toString();
            let response = await fetch(url);
            let responseJSON = await response.json();
            document.getElementById("response").innerHTML += JSON.stringify(responseJSON) + "\n\n";
            console.log("Data Received.\nURL: " + url);
        }
        else {
            url += "/del" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Entry " + s.matrikel + " deleted.\nURL: " + url);
            document.getElementById("response").innerHTML += responseString + "\n\n";
        }
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