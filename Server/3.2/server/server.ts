
import * as Http from "http";

import * as Url from "url";
//sämtl Funktionalitäten werden importiert → Zugriff auf Funktionen und Objekte der Modeule
export namespace Aufgabe3_1 {
    console.log("Starting server");
    let port: number = Number(process.env.PORT); //processenvPORT → liefert Informationen zum Port
    if (!port) //Wenn Port nicht geöffnet werden kann wird / geöffnet
        port = 8100; //Kommen auf unsere HerokuSeite mit dem /

    //Create new Server
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //send Order
        console.log("I hear voices!");
        if (_request.url) {
            let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
            for (let key in url.query) {
                console.log(key + ": " + url.query[key]);
            }
            let jsonString: string = JSON.stringify(url.query);
            _response.write(jsonString);

        }

        _response.setHeader("content-type", "text/html; charset=utf-8"); //Header wird erstellt
        _response.setHeader("Access-Control-Allow-Origin", "*"); //jeder hat access
        _response.write(_request.url); //IncomingMessage & ServerResponse
        _response.end();
    }
}