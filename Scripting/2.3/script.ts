namespace Aufgabe2_3 {

    namespace Aufgabe1 {

        function setupButtons(): void {
            let b1: HTMLElement = document.createElement("button");
            b1.style.height = "20px";
            b1.style.width = "90px";

            b1.addEventListener("click", newRectangle);
            document.body.appendChild(b1);

            let b2: HTMLElement = document.createElement("button");
            b2.style.height = "20px";
            b2.style.width = "90px";
            b2.style.color = "red";
            b2.style.marginLeft = "80px";

            b2.addEventListener("click", reloadPage);
            document.body.appendChild(b2);
        }
        setupButtons();

        function newRectangle(): void {
            if (b1.addEventListener) {
                let div2: HTMLDivElement = document.createElement("div");
                div2.style.color = (Math.random() * 100).toString();
                div2.style.height = (Math.random() * 100).toString() + "px";
                div2.style.width = (Math.random() * 100).toString() + "px";
                div2.style.position = (Math.random() * 100).toString() + "px";
                document.body.appendChild(div2);
            }
        }
        newRectangle();

        function reloadPage(): void {
            if (b2.addEventListener) {
                //relaod Page
            }
        }

        function drawRectangle(): void {

            for (let index: number = 0; index <= 5; index++) {
                let div1: HTMLDivElement = document.createElement("div");

                div1.style.color = (Math.random() * 100).toString();
                div1.style.height = (Math.random() * 100).toString() + "px";
                div1.style.width = (Math.random() * 100).toString() + "px";
                div1.style.position = (Math.random() * 100).toString() + "px";

                document.body.appendChild(div1);
            }
        }
        drawRectangle();
    }


    namespace Aufgabe2 {
        interface Potions {
            art: string;
            //leben: string;
            //ausdauer: string;
            //magie: string;
            //wut: string;
            farbe: string;
            staerke: string;
        }
        let p1: Potions = {
            art: "Lebenstrank",
            farbe: "green",
            staerke: "schwach"
        };
        let p2: Potions = erschaffePotion("Ausdauertrank", "yellow", "stark");

        function erschaffePotion(_art: string, _farbe: string, _staerke: string): Potions {
            let p: Potions = { art: _art, farbe: _farbe, staerke: _staerke };
            return p;
        }
        let potionsArray: Potions[] = [];
        potionsArray.push(p1);
        potionsArray.push(p2);
        potionsArray.push({ art: "Magietrank", farbe: "blue", staerke: "mittel" });
    }

}



}








}