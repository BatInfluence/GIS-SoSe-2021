namespace Aufgabe4 {
    export interface Trank {
        image: string;
    }

    export interface AllParts {
        auswahl: Trank[];
        klein: Trank[];
        mittel: Trank[];
        groß: Trank[];
    }

    // Aufgabe 2 b)
    export interface Selection {
        auswahl: Trank[];
        klein: Trank[];
        mittel: Trank[];
        groß: Trank[];
    }

    // Aufgabe 2 c)
    export let parts: AllParts = {
        auswahl: [
            { image: "pictures/Lifepotion.png" },
            { image: "pictures/Manapotion.png" },
            { image: "pictures/Stealthpotion.png" },
            { image: "pictures/Angerpotion.png" }

        ],
        klein: [
            { image: "picture/smallPotion.png" },
            { image: "picture/smallPotion.png" },
            { image: "picture/smallPotion.png" },
            { image: "picture/smallPotion.png" }
        ],
        mittel: [
            { image: "picture/mittelPotion.png" },
            { image: "picture/mittelPotion.png" },
            { image: "picture/mittelPotion.png" },
            { image: "picture/mittelPotion.png" }
        ],
        groß: [
            { image: "picture/bigPotion.png" },
            { image: "picture/bigPotion.png" },
            { image: "picture/bigPotion.png" },
            { image: "picture/bigPotion.png" }
        ]
    };
/*
    export let trankJSON: string = JSON.stringify(parts);
    console.log(trankJSON);

    export let trankJSON: string = '{"auswahl": "John", "age": 31, "city": "New York"}';
    export let parts: AllParts = JSON.parse(trankJSON);
    document.getElementById("demo").innerHTML = parts.auswahl;
    */
}
