namespace Abgabe {
    //AlleRezepte
    let url: string = "https://gis-sose2021.herokuapp.com";
    let query: URLSearchParams;

    let allleRezepte: HTMLDivElement = <HTMLDivElement>document.getElementById("container-reciepe"); //Ausgabe der Rezepte in DIV "container-reciepe"

    //FavoritenButton für Meme:
    document.getElementById("meme").addEventListener("click", showMeme);

    function showMeme(): void {
        window.open("Meme.html"); //FUNKTIONIERT!!
    }

    //Anzeigen der Rezepte auf AlleRezepte:
    document.getElementById("container-reciepe").addEventListener("click", showReciepe);
    function showReciepe(): void {
        handleRequestShowReciepe();
    }

    async function handleRequestShowReciepe(): Promise<void> {
        window.onload = handleRequestShowReciepe; //window.onload → Rezepte werden sofort angezeigt 
        // tslint:disable-next-line: no-any
        url += "/container-reciepe" + "?" + query.toString(); //Url wird in String umgewandelt
        let response: Response = await fetch(url);  //Warten auf Url
        let responseText: string = await response.text(); 
        console.log("Rezepte werden angezeigt.");

        allleRezepte.innerHTML = responseText;            //Serverantwort innehralb der HTML
    }

    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow(): void {

        handleRequestShowReciepeWindow();
    }

    async function handleRequestShowReciepeWindow(): Promise<void> {
        window.open("RezeptAnzeige.html");
        //wenn Rezept-Name angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
        //WIE LADE ICH DA JETZT DIE JEWEILIGEN REZEPTE REIN??! Das muss ja innerhalb der server.ts Datei gemacht werden, aber WIE? 

    }
     
}



