"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_4 = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Aufgabe3_4;
(function (Aufgabe3_4) {
    startServer();
    async function startServer() {
        await connectToDB("mongodb+srv://new-user1:piupiu123@gis2021.d2dey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
        console.log("Starting server");
        let port = Number(process.env.PORT); //processenvPORT → liefert Informationen zum Port
        if (!port) //Wenn Port nicht geöffnet werden kann wird / geöffnet
            port = 8100; //Kommen auf unsere HerokuSeite mit dem /
        //Create new Server piupiu
        let server = Http.createServer();
        server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
        server.addListener("listening", handleListen);
        server.listen(port);
    }
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Header wird erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //jeder hat access
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            if (url.pathname == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br>");
                }
            }
            if (url.pathname == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
            _response.end();
        }
    }
    async function connectToDB(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        let students = mongoClient.db("Test").collection("Student");
        // let s: Student = {name: "Max Mustermann", matrikel: 666};
        // students.insertOne(s);
    }
    /* async function submitText(s: Student): Promise<string> {
       let students: Mongo.Collection = await connectToDB();
       let output: string = "";
  
       if (s.registration + "" == "NaN") {
         output = "Hast dich wohl vertippt. Macht nichts, try again! :3";
       }
       else if (await students.countDocuments({ "Matrikelnummer": s.registration }) != 0) {
         output = "Student*in mit dieser Matrikelnummer existiert bereits, du Knecht!!";
       }
       else {
         students.insertOne(s);
         output = "Feedback von '" + s.name + "' (" + s.registration + ") " + "hinzugefügt.";
       }
       return output;
     }
  
     async function giveFeedback(): Promise<Student[]> {
       let students: Mongo.Collection = await connectToDB();
       let cursor: Mongo.Cursor = students.find();
       let result: Student[] = await cursor.toArray();
       return result;
     }
     */
})(Aufgabe3_4 = exports.Aufgabe3_4 || (exports.Aufgabe3_4 = {}));
/*
let cursor: Mongo.Cursor = students.find();
let result: Student[] = await cursor.toArray();
console.log(result);

let s: Student = await students.findOne({ matrikel: 123456 });
console.log(s);
students.deleteOne({ matrikel: 666 });
}

connectToDB("mongodb://localhost:27017");

interface Student {
name: string;
matrikel: number;
}
*/ 
//# sourceMappingURL=dbTest.js.map