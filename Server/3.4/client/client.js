"use strict";
var Aufgabe3_4;
(function (Aufgabe3_4) {
    let url = "https://gis-sose2021.herokuapp.com";
    let f;
    let submit = document.getElementById("submit");
    let feedback = document.getElementById("feedback");
    submit.addEventListener("click", submitText);
    feedback.addEventListener("click", giveFeedback);
    function submitText() {
        // console.log("erfolgt"); 
        //type = "/send";
        handleRequest(0);
    }
    function giveFeedback() {
        // console.log("piupiu");
        //type = "/receive";
        handleRequest(1);
    }
    async function handleRequest(type) {
        let query = new URLSearchParams(FormData);
        if (type == 0) {
            url += "/send" + "?" + query.toString();
            let response = await fetch(url);
            let responseString = await response.text();
            console.log("Data Sent", f);
            console.log("URL:", url);
            document.getElementById("output").innerHTML += responseString + "\n\n";
        }
        else if (type == 1) {
            url += "/receive" + "?" + query.toString();
            let response = await fetch(url);
            let responseJSON = await response.json();
            document.getElementById("response").innerHTML += JSON.stringify(responseJSON) + "\n\n";
            console.log("Data Received.\nURL: " + url);
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
})(Aufgabe3_4 || (Aufgabe3_4 = {}));
//# sourceMappingURL=client.js.map