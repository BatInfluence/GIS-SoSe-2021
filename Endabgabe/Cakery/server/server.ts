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
    favoriten: Receipe[];
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
      port = 8100; //Kommen auf die Herokuseite mit dem /

    //Create new Server piupiu
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
    server.addListener("listening", handleListen); //Listending wird ausgegeben
    server.listen(port);
  }

  async function connectToDB(): Promise<Mongo.Collection> {
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_URLmongo, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();

    let user: Mongo.Collection = mongoClient.db("Cakery").collection("User");
    let receipe: Mongo.Collection = mongoClient.db("Cakery").collection("Receipe");
    return user;
    return receipe; // :D
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

      //USER
      if (url.pathname == "/login") {
        console.log("---LOGIN-REQUEST---");
        let response: string = await loginCheck(u);
        _response.write(response + "\n");
      }

      if (url.pathname == "/registration") {
        _response.write("Ihr Account wurde erstellt.");
        let response: string = await registrationCheck(u);
        _response.write(JSON.stringify(response) + "\n");
      }

      if (url.pathname == "/delete") {
        console.log("---DELETE---");
        let response: string = await deleteCheck(u);
        _response.write(response + "\n");
      }



      //REZEPT SPEICHERN → MeineRezepte.html
      if (url.pathname == "/btn-hochladen") {
        console.log("---SAVE RECIPE---");
        await getReciepe(r);
        _response.write("Dein Rezept wurde gespeichert!");
      }

      //REZEPTE ANZEIGEN
      if (url.pathname == "/meineRezepte") {
        console.log("---SHOW RECIPE---");
        let search: Mongo.Cursor = receipe.find({ "user": url.query.user }); //Das funktioniert iwie nicht → siehe Zeile 52
        let result: Receipe[] = await search.toArray();; //soll auf das favoriten- Rezept-Array des Useres zugreifen; muss dann dort reingeladen werden
        _response.write(JSON.stringify(result)); //Muss zu string transformiert werden
      }

      //REZEPT LÖSCHEN
      if (url.pathname == "/btn-delete") {
        console.log("---DELETE RECIPE---");
        receipe.deleteOne({ "meineRezepte": "" }); //Rezept soll aus Datenbank gelöscht werden → MeineRezepte.html Befehl siehe: https://docs.mongodb.com/guides/server/delete/
        _response.write("Dein Rezept wurde gelöscht!");
      }

      //REZEPT FAVORISIEREN
      if (url.pathname == "/btn-favorit") {
        console.log("---RECIPE FAVORITE---");
        let favorisieren: Receipe = receipe.findOne({ "": "" });
        _response.write("Rezept wurde favorisiert!");
      }
    }
    _response.end();
    console.log("---SERVER REQUEST SENT---");
  }


  async function loginCheck(u: User): Promise<string> {
    let user: Mongo.Collection = await connectToDB();
    let output: string = "";

    if (u.password + "" == "NaN") {
      output = "Das Passwort fehlt oder ist falsch! :3";
    }
    else if (await user.countDocuments({ "Password": u.password }) != 0) {
      output = "User*in mit diesem Passwort existiert bereits, du Knecht!!";
    }
    if (u.username + "" == "NaN") {
      output = "Der Username muss noch ausgefüllt werden! D:";
    }
    else if (await user.countDocuments({ "Username": u.username }) != 0) {
      output = "Der Username existiert bereits... sei KREATIVER!! ";
    }
    return output;
  }



  async function registrationCheck(u: User): Promise<string> {
    let user: Mongo.Collection = await connectToDB();
    let output: string = "";

    if (u.password + "" == "NaN") {
      output = "Das Passwort fehlt! :3";
    }
    else if (await user.countDocuments({ "Password": u.password }) != 0) {
      output = "User*in mit diesem Passwort existiert bereits, du Knecht!!";
    }
    else {
      user.insertOne(u);
      output = "User mit '" + u.lastname + "' (" + u.name + u.password + u.username + ") " + "hinzugefügt.";
    }
    return output;
  }

  
  async function deleteCheck(u: User): Promise<string> {
    let user: Mongo.Collection = await connectToDB();
    let output: string = "";
    user.deleteOne(u);
    output = "User mit Daten:'" + u.lastname + "' (" + u.name + u.password + u.username + ") " + "wurde gelöscht.";
    return output;
  }


  async function getReciepe(r: Receipe): Promise<string> {
    let receipe: Mongo.Collection = await connectToDB();
    let output: string = "";

    receipe.insertOne(r);
    output = "Rezept wurde hinzugefügt";
    return output;
  }












}
