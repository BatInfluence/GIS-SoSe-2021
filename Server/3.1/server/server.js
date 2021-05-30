"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe3_1 = void 0;
const Http = require("http"); //sämtl Funktionalitäten werden importiert → Zugriff auf Funktionen und Objekte der Modeule
var Aufgabe3_1;
(function (Aufgabe3_1) {
    console.log("Starting server");
    let port = Number(process.env.PORT); //processenvPORT → liefert Informationen zum Port
    if (!port) //Wenn Port nicht geöffnet werden kann wird / geöffnet
        port = 8100; //Kommen auf unsere HerokuSeite mit dem /
    //Create new Server
    let server = Http.createServer();
    server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Header wird erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //jeder hat access
        _response.write(_request.url); //IncomingMessage & ServerResponse
        _response.end();
    }
})(Aufgabe3_1 = exports.Aufgabe3_1 || (exports.Aufgabe3_1 = {}));
//# sourceMappingURL=server.js.map