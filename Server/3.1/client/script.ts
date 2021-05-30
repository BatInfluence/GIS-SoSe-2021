namespace Aufgabe3_1 {
    let btn: HTMLButtonElement = <HTMLButtonElement>document.getElementById("submit");
    btn.addEventListener("click", click);

    async function click(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gis-sose2021.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        let response: Response = await fetch(url, { method: "get" });
        let responseText: string = await response.text();
        console.log(responseText);
    }
}