namespace Aufgabe4 {
   // Aufgabe 2 c)
   /* export let parts: AllParts = {
         auswahl: [
             { image: "pictures/Lifepotion.png" },
             { image: "pictures/Manapotion.png" },
             { image: "pictures/Stealthpotion.png" },
             { image: "pictures/Angerpotion.png" }
 
         ],
        zusatz: [
             { image: "picture/smallPotion.png" },
             { image: "picture/smallPotion.png" },
             { image: "picture/smallPotion.png" },
             { image: "picture/smallPotion.png" }
         ],
         size: [
             { image: "picture/mittelPotion.png" },
             { image: "picture/mittelPotion.png" },
             { image: "picture/mittelPotion.png" },
             { image: "picture/mittelPotion.png" }
         ],
        
     };
 */

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
   export let trankJSON: string = //funktion in script.ts die und aufrufen
      ` {
      "auswahl": [
         {
            "image": "pictures/Lifepotion.png"
         },
         {
            "image": "pictures/Manapotion.png"
         },
         {
            "image": "pictures/Stealthpotion.png"
         },
         {
            "image": "pictures/Angerpotion.png"
         }
      ],
      "zusatz": [
         {
            "image": "pictures/honey.jpeg"
         },
         {
            "image": "pictures/zitone.jpeg"
         },
         {
            "image": "pictures/schokolade.jpeg"
         }
      ],
      "groeße": [
         {
            "image": "pictures/smallPotion.png"
         },
         {
            "image": "pictures/mittelPotion.png"
         },
         {
            "image": "pictures/bigPotion.png"
         }
      ]
   }`;
}