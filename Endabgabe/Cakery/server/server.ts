import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

export namespace Endabgabe {
    let u: User;
    let r: Receipe;
    let _URLmongo: string = "mongodb+srv://new-user1:piupiu123@gis2021.d2dey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    export interface User {
        name: string;
        lastname: string;
        username: string;
        password: string;
    }

    export interface Login {
        message: string;
        error: string;
    }

    export interface Receipe {
        erstesBeispiel: string;
        zweitesBeispiel: string;
        newZ: string;
        zubereitung: string;
    }

    startServer();
    async function startServer(): Promise<void> {
      console.log("Starting server");
  
      await connectToDB();
      let port: number = Number(process.env.PORT); //processenvPORT → liefert Informationen zum Port
      if (!port) //Wenn Port nicht geöffnet werden kann wird / geöffnet
        port = 8100; //Kommen auf unsere HerokuSeite mit dem /
  
      //Create new Server piupiu
      let server: Http.Server = Http.createServer();
      server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
      server.addListener("listening", handleListen); //Listending wird ausgegeben
      server.listen(port);
    }
  
    function handleListen(): void {
      console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> { //send Order
      console.log("I hear voices!");
  
      _response.setHeader("content-type", "text/html; charset=utf-8"); //Header wird erstellt
      _response.setHeader("Access-Control-Allow-Origin", "*"); //jeder hat access
  
      if (_request.url) {
        let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        if (url.pathname == "/submit") {
          let response: string = await submitText(u);
          _response.write(response + "<br>");
        }
        // if (url.pathname == "/receive") {
        //   let response: Feedback[] = await giveFeedback();
        //   _response.write(JSON.stringify(response) + "<br>");
        // }
        _response.end();
      }
    }
  
    async function connectToDB(): Promise<Mongo.Collection> {
      let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_URLmongo, { useNewUrlParser: true, useUnifiedTopology: true });
      await mongoClient.connect();
      let receipe: Mongo.Collection = mongoClient.db("Cakery").collection("Receipe");
      return receipe;
    }




}
