namespace Abgabe {
    let url: string = "https://gis-sose2021.herokuapp.com";
    let u: User;
    let query: URLSearchParams;
    let meineRezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("meineRezepte"); //Ausgabefeld in "MeineRezepte"

    document.getElementById("submit").addEventListener("click", clickLogin);
    document.getElementById("registration").addEventListener("click", clickRegistration);
    document.getElementById("delete").addEventListener("click", clickDelete);

    export interface User {
        name: string;
        lastname: string;
        username: string;
        password: string;
    }

    export interface Login {
        message: string;
        error: string;
    }

    async function clickLogin(): Promise<void> {
        handleRequest(0);
    }

    async function clickRegistration(): Promise<void> {
        handleRequest(1);
    }

    async function clickDelete(): Promise<void> {
        handleRequest(2);
    }

    async function handleRequest(type: number): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        query = new URLSearchParams(<any>formData);

        if (type == 0) {
            url += "/login" + "?" + query.toString();           //Stringumwandlung 
            let response: Response = await fetch(url);          //Wartet auf die URL 
            let responseText: string = await response.text();
            console.log(responseText);
            let loginAnswer: Login = JSON.parse(responseText);  //JSON Okjekt wird erstellt

            //Soll überprüft werden, ob Userdaten richtig eingegeben wurden, falls ja Weiterleitung zu AlleRezepte, falls nein Fehlermeldung 
            if (loginAnswer.error != null) {
                meineRezepte.innerHTML = loginAnswer.error;      //wird in DIV ausgegeben
                console.log("ALERT: Woops, maybe try another passwort or username!");
            }
            else if (loginAnswer.message != null) {
                window.alert("Du hast dich erfolgreich eingeloggt!");
                window.open("AlleRezepte.html");
                meineRezepte.innerHTML = loginAnswer.message;
            }
        }

        else if (type == 1) {
            url += "/registration" + "?" + query.toString();       //zu string umwandeln 
            let response: Response = await fetch(url);             //auf url warten      //antwort wartet auf die Server url 
            let responseText: string = await response.text();      //json okject erstellen
            console.log(responseText);
        }

        else {
            url += "/delete" + "?" + query.toString();
            let response: Response = await fetch(url);
            let responseText: string = await response.text();
            console.log("DELETET: User (" + u + ")\nURL: " + url);
            document.getElementById("output").innerHTML += responseText + "\n\n";
        }
        url = "https://gis-sose2021.herokuapp.com";
    }
}









