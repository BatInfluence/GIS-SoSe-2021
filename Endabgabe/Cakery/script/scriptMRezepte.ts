namespace Abgabe {
    //MeineRezepte
    let url: string = "https://gis-sose2021.herokuapp.com";
    let r: Receipe;
    let query: URLSearchParams;
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
            document.getElementById("meineRezepte").innerHTML += responseString + "\n"; //Anzeigen der Rezepte auf MeineRezepte:
        }
    }

}