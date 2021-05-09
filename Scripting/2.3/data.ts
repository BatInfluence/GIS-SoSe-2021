namespace Aufgabe2 {
    interface Potions {
        art: string;
        staerke: string;
        kosten: number;
    }

    let p1: Potions = {
        art: "Lebenstrank",
        staerke: "schwach",
        kosten: 2.5
    };

    let p2: Potions = erschaffePotion("Ausdauertrank", "stark", 12);

    function erschaffePotion(_art: string, _staerke: string, _kosten: number): Potions {
        let p: Potions = { art: _art, staerke: _staerke, kosten: _kosten };
        return p;
    }

    let potionsArray: Potions[] = [];
    potionsArray.push(p1);
    potionsArray.push(p2);
    potionsArray.push({ art: "Magietrank", staerke: "mittel", kosten: 5.0 });
}


namespace Aufgabe3 {
    function images(): void {
        document.querySelectorAll(".images > div.divClass");
        document.addEventListener("click", handleClick);

    }
    images();

    function handleClick(): void {
        let buttonSchwach: HTMLElement = document.createElement("button");
        buttonSchwach.style.height = "20px";
        buttonSchwach.style.width = "90px";
        buttonSchwach.textContent = "schwach";
        document.body.appendChild(buttonSchwach);

        let buttonMittel: HTMLElement = document.createElement("button");
        buttonMittel.style.height = "20px";
        buttonMittel.style.width = "90px";
        buttonMittel.textContent = "mittel";
        document.body.appendChild(buttonMittel);

        let buttonStark: HTMLElement = document.createElement("button");
        buttonStark.style.height = "20px";
        buttonStark.style.width = "90px";
        buttonStark.textContent = "stark";
        document.body.appendChild(buttonStark);

    }

    function clickButton(): void {
        if (document.querySelector(".images-img1")) { //If schleife um zu sagen, welcher Trank ausgewählt wurde
            if (handleClick == choseButtonSchwach) {
                let schwacherLTrank: HTMLElement = document.createElement("p");
                schwacherLTrank.textContent = "Dein schwacher Lebenstrank wird gemixt.";
                document.body.appendChild(schwacherLTrank);
            }
            if (handleClick == choseButtonMittel) {
                let mittlererLTrank: HTMLElement = document.createElement("p");
                mittlererLTrank.textContent = "Dein mittlerer Lebenstrank wird gemixt.";
            }
            if (handleClick == choseButtonStark) {
                let starkerLTrank: HTMLElement = document.createElement("p");
                starkerLTrank.textContent = "Dein schwacher Lebenstrank wird gemixt.";
            }
        }

    }
    clickButton();

    function choseButtonSchwach(klick: MouseEvent): void {

        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        console.log("Schwacher Lebenstrank");
    }

    function choseButtonMittel(klick: MouseEvent): void {
        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        console.log("Mittlerer Lebenstrank");
    }

    function choseButtonStark(klick: MouseEvent): void {
        let img: HTMLImageElement = <HTMLImageElement>klick.currentTarget;
        console.log("Starker Lebenstrank");
    }
}

