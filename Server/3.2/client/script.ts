namespace Aufgabe3_1 {
    let buttonSend: HTMLButtonElement = <HTMLButtonElement>document.getElementById("button2");
    buttonSend.addEventListener("click", click); 

    let url: string = "contact.html";
    async function click(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        //let url: string = "https://gis-sose2021.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();
        alert(responseText);
    }
}