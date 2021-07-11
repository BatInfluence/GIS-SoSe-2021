"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Endabgabe = void 0;
const Mongo = require("mongodb");
const Http = require("http");
const Url = require("url");
var Endabgabe;
(function (Endabgabe) {
    let u;
    let r;
    let _URLmongo = "mongodb+srv://new-user1:piupiu123@gis2021.d2dey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    startServer();
    async function startServer() {
        console.log("Starting server");
        await connectToDB();
        let port = Number(process.env.PORT); //processenvPORT → liefert Informationen zum Port
        if (!port) //Wenn Port nicht geöffnet werden kann wird / geöffnet
            port = 8100; //Kommen auf die Herokuseite mit dem /
        //Create new Server piupiu
        let server = Http.createServer();
        server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
        server.addListener("listening", handleListen); //Listending wird ausgegeben
        server.listen(port);
    }
    async function connectToDB() {
        let mongoClient = new Mongo.MongoClient(_URLmongo, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let user = mongoClient.db("Cakery").collection("User");
        return user;
        let receipe = mongoClient.db("Cakery").collection("Receipe");
        return receipe;
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Header wird erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //jeder hat access
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            //USER
            if (url.pathname == "/login") {
                console.log("---LOGIN-REQUEST---");
                let response = await loginCheck(u);
                _response.write(response + "\n");
            }
            if (url.pathname == "/registration") {
                console.log("---SIGNUP-REQUEST---");
                let response = await registrationCheck(u);
                _response.write(JSON.stringify(response) + "\n");
            }
            // if (url.pathname == "/delete") {
            //   console.log("---DELETE---");
            //   let response: string = await deleteCheck(u);
            //   _response.write(response + "\n");
            // }
            //REZEPT SPEICHERN → MeineRezepte.html
            if (url.pathname == "/btn-hochladen") {
                console.log("---SAVE RECIPE---");
                await getReciepe(r);
                _response.write("Ihr Rezept wurde gespeichert!");
            }
            //REZEPTE ANZEIGEN
            if (url.pathname == "/meineRezepte") {
                console.log("---SHOW RECIPE---");
                let result;
                _response.write(JSON.stringify(result));
            }
            //REZEPT LÖSCHEN
            if (url.pathname == "/btn-delete") {
                console.log("---DELETE RECIPE---");
                let receipe = await connectToDB();
                receipe.deleteOne({ "_id": new Mongo.ObjectId(url.query._id.toString()) });
                _response.write("Rezept wurde gelöscht!");
            }
        }
        _response.end();
    }
    async function loginCheck(u) {
        let user = await connectToDB();
        let output = "";
        if (u.password + "" == "NaN") {
            output = "Das Passwort fehlt oder ist falsch! :3";
        }
        else if (await user.countDocuments({ "Password": u.password }) != 0) {
            output = "Student*in mit diesem Passwort existiert bereits, du Knecht!!";
        }
        if (u.username + "" == "NaN") {
            output = "Der Username muss noch ausgefüllt werden! D:";
        }
        else if (await user.countDocuments({ "Password": u.username }) != 0) {
            output = "Der Username existiert bereits... sei KREATIVER! ";
        }
        return output;
    }
    async function registrationCheck(u) {
        let user = await connectToDB();
        let output = "";
        if (u.password + "" == "NaN") {
            output = "Das Passwort fehlt! :3";
        }
        else if (await user.countDocuments({ "Password": u.password }) != 0) {
            output = "Student*in mit diesem Passwort existiert bereits, du Knecht!!";
        }
        else {
            user.insertOne(u);
            output = "User mit von '" + u.lastname + "' (" + u.name + u.password + u.username + ") " + "hinzugefügt.";
        }
        return output;
    }
    // async function deleteCheck(u: User): Promise<string> {
    //   let user: Mongo.Collection = await connectToDB();
    //   let output: string = "";
    // }
    async function getReciepe(r) {
        let receipe = await connectToDB();
        let output = "";
        receipe.insertOne(r);
        output = "Rezept wurde hinzugefügt";
        return output;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map