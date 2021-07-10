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
        url += "/container-reciepe" + "?" + query.toString(); //Url in String umwandeln
        let response: Response = await fetch(url);  //auf url warten
        let responseText: string = await response.text(); //json okject erstellen
        console.log("Rezepte werden angezeigt.");

        allleRezepte.innerHTML = responseText;            //Die server antwort soll innerhalb dem HTML ausgegeben werden 

    }

    //Rezepte werden angezeigt, nach click auf Name:
    document.getElementById("#").addEventListener("click", showReciepeWindow);
    function showReciepeWindow(): void {

        handleRequestShowReciepeWindow();
    }

    async function handleRequestShowReciepeWindow(): Promise<void> {
        window.open();
        for (let index = 0; index < array.length; index++) { //wenn Rezept-Kachel angeklickt wird, soll sich neues Fenster mit Rezept öffnen; mit Zurück-Button
            const element = array[index];

        }
    }



}