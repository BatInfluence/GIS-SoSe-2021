"use strict";
var Aufgabe2;
(function (Aufgabe2) {
    let p1 = {
        art: "Lebenstrank",
        staerke: "schwach",
        kosten: 2.5
    };
    let p2 = erschaffePotion("Ausdauertrank", "stark", 12);
    function erschaffePotion(_art, _staerke, _kosten) {
        let p = { art: _art, staerke: _staerke, kosten: _kosten };
        return p;
    }
    let potionsArray = [];
    potionsArray.push(p1);
    potionsArray.push(p2);
    potionsArray.push({ art: "Magietrank", staerke: "mittel", kosten: 5.0 });
})(Aufgabe2 || (Aufgabe2 = {}));
var Aufgabe3;
(function (Aufgabe3) {
    function images() {
        document.querySelectorAll(".images > div.divClass");
        document.addEventListener("click", handleClick);
    }
    images();
    function handleClick() {
        let buttonSchwach = document.createElement("button");
        buttonSchwach.style.height = "20px";
        buttonSchwach.style.width = "90px";
        buttonSchwach.textContent = "schwach";
        document.body.appendChild(buttonSchwach);
        let buttonMittel = document.createElement("button");
        buttonMittel.style.height = "20px";
        buttonMittel.style.width = "90px";
        buttonMittel.textContent = "mittel";
        document.body.appendChild(buttonMittel);
        let buttonStark = document.createElement("button");
        buttonStark.style.height = "20px";
        buttonStark.style.width = "90px";
        buttonStark.textContent = "stark";
        document.body.appendChild(buttonStark);
    }
    function clickButton() {
        if (document.querySelector(".images-img1")) { //If schleife um zu sagen, welcher Trank ausgewählt wurde
            if (handleClick == choseButtonSchwach) {
                let schwacherLTrank = document.createElement("p");
                schwacherLTrank.textContent = "Dein schwacher Lebenstrank wird gemixt.";
                document.body.appendChild(schwacherLTrank);
            }
            if (handleClick == choseButtonMittel) {
                let mittlererLTrank = document.createElement("p");
                mittlererLTrank.textContent = "Dein mittlerer Lebenstrank wird gemixt.";
            }
            if (handleClick == choseButtonStark) {
                let starkerLTrank = document.createElement("p");
                starkerLTrank.textContent = "Dein schwacher Lebenstrank wird gemixt.";
            }
        }
    }
    clickButton();
    function choseButtonSchwach(klick) {
        let img = klick.currentTarget;
        console.log(img.src);
    }
    function choseButtonMittel(klick) {
        let img = klick.currentTarget;
        console.log(img.src);
    }
    function choseButtonStark(klick) {
        let img = klick.currentTarget;
        console.log(img.src);
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=data.js.map