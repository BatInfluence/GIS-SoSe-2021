namespace Aufgabe3_4 {
    let formData: FormData;
    let url: string = "https://gis-sose2021.herokuapp.com";
    let type: string = "";

    interface Feedback {
        name: string;
        lastname: string;
        registration: number;
        text: string;
    }

    let submit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    let feedback: HTMLButtonElement = <HTMLButtonElement>document.getElementById("feedback");

    submit.addEventListener("click", submitText);
    feedback.addEventListener("click", giveFeedback);

    function submitText(): void {
        // console.log("erfolgt"); 
        type = "/json";
        updateInputs();
        handleRequest();
    }


    function giveFeedback(): void {
        // console.log("piupiu");
        type = "/html";
        handleRequest();
    }

    async function handleRequest(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        url += type;
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //url += "?" + query.toString();
        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();

        alert(responseText);

        if (type == "/json") {
            let responseJSON: JSON = JSON.parse(responseText);
            console.log(responseJSON);
        }
        else if (type == "/html") {
            responseDIV.innerHTML = responseText;
        }
        url = "https://gis-sose2021.herokuapp.com";
    }

    function updateInputs(): void {
        let name: string = document.getElementsByTagName("input")[0].value;
        let lastname: string = document.getElementsByTagName("input")[1].value;
        let registration: number = parseInt(document.getElementsByTagName("input")[2].value);
        let text: string = document.getElementsByTagName("input")[3].value;
        s = { name, lastname, registration, text };
    }


}