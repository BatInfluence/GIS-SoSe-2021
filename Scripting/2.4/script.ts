namespace Aufgabe4 {
    let parts: AllParts;
    createObj();

    function createTrankDiv(_part: Trank, _index: number): HTMLDivElement {
        // wrapping div
        let div: HTMLDivElement = document.createElement("div");
        div.classList.add("trank");

        // image to be displayed
        let img: HTMLImageElement = document.createElement("img");
        img.src = _part.image;
        img.addEventListener("click", handleSelection);
        div.appendChild(img);


        // Möglichkeit 1: innere Funktion
        img.addEventListener("click", handleSelection);


        //opens new site
        img.addEventListener("click", handleSelection2);

        div.appendChild(img);

        return div;

        // innere Funktion, welche Durch ihre Positionierung innerhalb der createTrankDiv Funktion das _part noch kennt. Darum kann man einfach folgendes machen:
        function handleSelection(_e: Event): void {
            console.log("innere Funktion", _part);
        }
    }


    function handleSelection2(_e: Event): void { // Hier soll neue Seite getriggert werden!
        //window.open("zusatz.html", "_blank");
        //???? hab das in der HTML gelöst, bekomme das hier nicht hin

    }

    function showPossibilities(_parts: Trank[]): void {
        let wrapper: HTMLDivElement = <HTMLDivElement>document.getElementById("selectionWrapper");

        for (let i: number = 0; i < _parts.length; i++) {
            let div: HTMLDivElement = createTrankDiv(_parts[i], i);
            wrapper.appendChild(div);
        }
    }
    showPossibilities(parts.auswahl); //Trankauswahl wird gezeigt


    function createObj(): void {
        parts = JSON.parse(trankJSON);
    }

    if (localStorage.click == "pictures/Lifepotion.png") {
        console.log(localStorage.getItem("pictures/Lifepotion.png"));
    }
    if (localStorage.click == "pictures/Manapotion.png") {
        console.log(localStorage.getItem("pictures/Lifepotion.png"));
    }

    

    //localStorage.setItem("auswahl", JSON.stringify(parts));
    //console.log(localStorage.getItem("auswahl"));
}





















