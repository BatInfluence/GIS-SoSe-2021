namespace Aufgabe4 {
    let weiterleitungsziel: string;
    let localStorageKey: string;
    let benutzesArray: Trank[];
    let parts: AllParts;
   // createObj();

    export interface Trank {
        image: string;
    }

    export interface AllParts {
        auswahl: Trank[];

        zusatz: Trank[];

        groeße: Trank[];
    }

    // Aufgabe 2 b)
    export interface Selection {
        auswahl: Trank;
        zusatz: Trank;
        groeße: Trank;
    }
    function createTrankDiv(_part: Trank, _index: number): HTMLDivElement {
        // wrapping div
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("trank");

        // image to be displayed
        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;

        // Möglichkeit 2: äußere Funktion 
        img.addEventListener("click", handleSelection2);
        img.dataset.index = _index.toString(); //dataset → assoz. Array, String to String zuweisung

        div.appendChild(img);

        return div;
    }

    // äußere Funktion, welche nun anderweitig herausfinden muss, welchen Part wir gewählt haben.
    // in diesem Fall habe ich den index im auswahl Array auf dem Button im dataset hinterlegt.
    // Da der Button das ist, was das Event auslößt, können wir über _e.currentTarget darauf zugreifen.
    function handleSelection2(_e: Event): void {
        let target: HTMLElement = <HTMLElement>_e.currentTarget; // auf currentTarget liegt EventListener
        let index: number = Number(target.dataset.index);
        console.log(index);
        console.log("äußere Funktion", benutzesArray[index]); // bekomme ausgewählten Trank-Nummer zurück, parts.auswahl → ausgewählter Trank

        localStorage.setItem(localStorageKey, benutzesArray[index].image); //Bild von potion
        window.open(weiterleitungsziel, "_self");
    }


    function showPossibilities(_parts: Trank[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");

        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createTrankDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }

    async function loadJSON(_url: RequestInfo): Promise<void> { //JSon Datei laden
        let response: Response = await fetch(_url);
        console.log("Response", response);
        let parts: AllParts = await response.json();
        console.log(parts.auswahl);
        console.log(parts.zusatz);
        console.log(parts.groeße);
    }
    loadJSON("https://batinfluence.github.io/GIS-SoSe-2021/Scripting/2.5/data.JSON");

    /*async function sendLocalStorage(_url: RequestInfo): Promise<void> { //LocalStorage wird an Server gesendet
        let LocalArray: string[] = JSON.parse(localStorage.getItem("Trankmixerei")); //HÄÄ??!
    }
    sendLocalStorage("https://");

    /*function createObj(): void {
        parts = JSON.parse(trankJSON);
    }

    async function buildHTML(): Promise<void> { // JSON in Html anzeigen
        parts = await loadJSON("https://batinfluence.github.io/GIS-SoSe-2021/Scripting/2.5/data.json");
        showPossibilities(parts.auswahl);
        showPossibilities(parts.zusatz);
        showPossibilities(parts.groeße);
    }
    buildHTML();
*/
    async function loadPage(): Promise<void> { // Auf welcher Seite wir sind
        console.log(document.title);
        if (document.title == "Zusatz") { //Weiterleitung zu Sizeseite
            showPossibilities(parts.zusatz);
            weiterleitungsziel = "size.html";
            localStorageKey = "Zusatz";
            benutzesArray = parts.zusatz;
            //Anzeige von Bildern
        }
        if (document.title == "Size") { //Weiterleitung zu Gesamtseite
            showPossibilities(parts.groeße);
            weiterleitungsziel = "gesamt.html";
            localStorageKey = "Size";
            benutzesArray = parts.groeße;

        }
        if (document.title == "Trankmixerei") { //Weiterleitung zu Zusatzseite
            showPossibilities(parts.auswahl);
            weiterleitungsziel = "zusatz.html";
            localStorageKey = "Trankmixerei";
            benutzesArray = parts.auswahl;
        }

        // Aufgabe 2
        let selectionPreview: HTMLElement = <HTMLElement>document.getElementById("showSelection");
        //Wenn Auswahl getroffen, aus localStorage nehmen und in "gesamt.html" einfügen
        if (parts.auswahl) {
            selectionPreview.appendChild(createImage(localStorage.getItem("Trankmixerei")));
        } else {
            selectionPreview.appendChild(createImage("./img/none.png"));
        }
        if (parts.zusatz) {
            selectionPreview.appendChild(createImage(localStorage.getItem("Zusatz")));
        } else {
            selectionPreview.appendChild(createImage("./img/none.png"));
        }
        if (parts.groeße) {
            selectionPreview.appendChild(createImage(localStorage.getItem("Size")));
        } else {
            selectionPreview.appendChild(createImage("./img/none.png"));
        }

        function createImage(_src: string): HTMLImageElement {
            let img: HTMLImageElement = document.createElement("img");
            img.src = _src;
            return img;

        }
    }
    loadPage();
}
























