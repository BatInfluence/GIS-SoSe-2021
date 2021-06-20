namespace Aufgabe3_4 {
    let url: string = "https://gis-sose2021.herokuapp.com";
    let type: string = "";
    let f: Feedback;


    export interface Feedback {
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
        //type = "/send";
        handleRequest(0);
    }


    function giveFeedback(): void {
        // console.log("piupiu");
        //type = "/receive";
        handleRequest(1);
    }

    async function handleRequest(type:number): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        url += type;
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        //url += "?" + query.toString();
        let response: Response = await fetch(url += "?" + query.toString());
        let responseText: string = await response.text();

        console.log(responseText);

        if (type == 0) {
            console.log("Data Sent", f);
            console.log("URL:", url);
            document.getElementById("Tada").innerHTML += responseText + "\n";
        }
        else if (type == 1) {
            let responseJSON: Feedback = await response.json();
            document.getElementById("response").innerHTML += JSON.stringify(responseJSON) + "\n";
            console.log("Data Received.\n URL: " + url);
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
}