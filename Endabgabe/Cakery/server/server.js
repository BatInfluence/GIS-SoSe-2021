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
            port = 8100; //Kommen auf unsere HerokuSeite mit dem /
        //Create new Server piupiu
        let server = Http.createServer();
        server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
        server.addListener("listening", handleListen); //Listending wird ausgegeben
        server.listen(port);
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
            if (url.pathname == "/submit") {
                let response = await submitText(u);
                _response.write(response + "<br>");
            }
            // if (url.pathname == "/receive") {
            //   let response: Feedback[] = await giveFeedback();
            //   _response.write(JSON.stringify(response) + "<br>");
            // }
            _response.end();
        }
    }
    async function connectToDB() {
        let mongoClient = new Mongo.MongoClient(_URLmongo, { useNewUrlParser: true, useUnifiedTopology: true });
        await mongoClient.connect();
        let receipe = mongoClient.db("Cakery").collection("Receipe");
        return receipe;
    }
})(Endabgabe = exports.Endabgabe || (exports.Endabgabe = {}));
//# sourceMappingURL=server.js.map