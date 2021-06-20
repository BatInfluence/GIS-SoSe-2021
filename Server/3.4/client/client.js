"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let url = "https://gis-sose2021.herokuapp.com";
    let type = "";
    let f;
    let submit = document.getElementById("submit");
    let feedback = document.getElementById("feedback");
    submit.addEventListener("click", submitText);
    feedback.addEventListener("click", giveFeedback);
    function submitText() {
        // console.log("erfolgt"); 
        type = "/send";
        handleRequest();
    }
    function giveFeedback() {
        // console.log("piupiu");
        type = "/receive";
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
        console.log(responseText);
        if (type == "/send") {
            console.log("Data Sent", f);
            console.log("URL:", url);
            document.getElementById("Tada").innerHTML += responseText + "\n";
        }
        else if (type == "/receive") {
            let responseJSON = await response.json();
            document.getElementById("response").innerHTML += JSON.stringify(responseJSON) + "\n";
            console.log("Data Received.\n URL: " + url);
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map