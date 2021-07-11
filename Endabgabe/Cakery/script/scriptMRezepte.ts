namespace Abgabe {
    //MeineRezepte
    let url: string = "https://gis-sose2021.herokuapp.com";
    let r: Receipe;
    let meineRezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("meineRezepte"); //Ausgabefeld in "MeineRezepte"

    //Neues Zutatenfeld erstellen: Funktioniert yay
    document.getElementById("btn-newZutat").addEventListener("click", Zutat);
    function Zutat(): void {
        let newZ: HTMLInputElement = document.createElement("input");
        newZ.innerText = "Neue Zutat...";
        var vorhandenesObjekt: HTMLElement = document.getElementById("divZutat");
        vorhandenesObjekt.appendChild(newZ);
    }

    //Hochladen von neuem Rezept:
    document.getElementById("btn-hochladen").addEventListener("click", hochladen);

    export interface Receipe {
        rezeptname: string;
        erstesBeispiel: string;
        zweitesBeispiel: string;
        newZ: string;
        zubereitung: string;
    }

    function hochladen(): void {//Lädt Rezept in Datenbank
        handleRequestHochladen(0);
    }

    async function handleRequestHochladen(type: number): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        if (type == 0) {
            url += "/btn-hochladen" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseString: string = await response.text();
            console.log("Receipe Sent", r);
            console.log("URL:", url);
            meineRezepte.innerHTML += responseString + "\n"; //Anzeigen der Rezepte auf MeineRezepte:
        }
    }


    //Rezept löschen & restliche Rezepte anzeigen:
    document.getElementById("btn-delete").addEventListener("click", deleteReciepe);
    function deleteReciepe(): void {
        handleRequestDelete(0);
    }
    async function handleRequestDelete(type: number): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        if (type == 0) {
            url += "/btn-delete" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseString: string = await response.text();
            console.log("Receipe Deleted", r);
            meineRezepte.innerHTML += responseString + "\n"; //Anzeigen der Rezepte auf MeineRezepte
        }
    }


    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow(): void {

        handleRequestShowReciepeWindow();
    }

    async function handleRequestShowReciepeWindow(): Promise<void> {
        window.open("RezeptAnzeige.html");
        // for (let index = 0; index < array.length; index++) { //wenn Rezept-Kachel angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
        //     const element = array[index];

        // }
    }




    document.getElementById("btn-back").addEventListener("click", goBack);
    function goBack(): void {
        window.open("MeineRezepte.html");
    }

}