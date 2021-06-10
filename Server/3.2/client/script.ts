namespace Aufgabe3_1 {
    let url: string = "https://gis-sose2021.herokuapp.com";
    let type: string = "";

    let htmlSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlsubmit");
    let jsonSubmit: HTMLButtonElement = <HTMLButtonElement>document.getElementById("jsonsubmit");
    let responseDIV: HTMLDivElement = <HTMLDivElement>document.getElementById("responseDIV");
    let buttonSend: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");

    buttonSend.addEventListener("click", handleSubmit);

    jsonSubmit.addEventListener("click", function (): void {
        type = "json";
        handleSubmit();
    });

    htmlSubmit.addEventListener("click", function (): void {
        type = "html";
        handleSubmit();
    });

    async function handleSubmit(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        url += type;
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();
        alert(response.text);

        if (type == "/json") {
            let responseJSON: JSON = JSON.parse(responseText);
            console.log(responseJSON);
        }
        else if (type == "/html") {
            responseDIV.innerHTML = "";
            let frag: DocumentFragment = document.createRange().createContextualFragment(responseText);
            responseDIV.appendChild(frag);
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
}