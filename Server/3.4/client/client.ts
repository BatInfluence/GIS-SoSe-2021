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
        updateInputs();
        handleRequest(0);
    }


    function giveFeedback(): void {
        // console.log("piupiu");
        handleRequest(1);
    }

    async function handleRequest(type: number): Promise<void> {
        formData = new FormData(document.forms[0]);
        //tslint:disable-next-line
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        if (type == 0) {
            url += "/send" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseString: string = await response.text();
            console.log("Data Sent", s);
            console.log("URL:", url);
            document.getElementById("response").innerHTML += responseString + "\n\n";

        } else if (type == 1) {
            url += "/receive" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseJSON: Feedback = await response.json();
            document.getElementById("response").innerHTML += JSON.stringify(responseJSON) + "\n\n";
            console.log("Data Received.\nURL: " + url);
        } else {
            url += "/del" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseString: string = await response.text();
            console.log("Entry " + s.matrikel + " deleted.\nURL: " + url);
            document.getElementById("response").innerHTML += responseString + "\n\n";
        }
    }

    function updateInputs(): void {
        let name: string = document.getElementsByTagName("input")[0].value;
        let lastname: string = document.getElementsByTagName("input")[1].value;
        let registration: number = parseInt(document.getElementsByTagName("input")[2].value);
        let text: string = document.getElementsByTagName("input")[3].value;
        s = { name, lastname, registration, text };
    }


}