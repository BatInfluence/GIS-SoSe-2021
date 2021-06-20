import * as Mongo from "mongodb";
import * as Http from "http";
import * as Url from "url";

export namespace Aufgabe3_4 {
  let f: Feedback;
  let _URLmongo: string = "mongodb+srv://new-user1:<password>>@gis2021.d2dey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

  interface Feedback {
    name: string;
    lastname: string;
    registration: number;
    text: string;
  }

  startServer();
  async function startServer(): Promise<void> {
    console.log("Starting server");

    let port: number = Number(process.env.PORT); //processenvPORT → liefert Informationen zum Port
    if (!port) //Wenn Port nicht geöffnet werden kann wird / geöffnet
      port = 8100; //Kommen auf unsere HerokuSeite mit dem /

    //Create new Server piupiu
    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest); //Eingetipptes wird gespeichert
    server.addListener("listening", handleListen);
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
      if (url.pathname == "/send") {
        let response: string = await submitText(f);
        _response.write(response + "<br>");
      }
      if (url.pathname == "/receive") {
        let response: Feedback[] = await giveFeedback();
        _response.write(JSON.stringify(response));
      }
      _response.end();
    }
  }

  async function connectToDB(): Promise<Mongo.Collection> {
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_URLmongo, { useNewUrlParser: true, useUnifiedTopology: true });
    await mongoClient.connect();
    let students: Mongo.Collection = mongoClient.db("Test").collection("Students");

    /* console.log("Database connection", students != undefined);
     console.log("findAll");
     let cursor: Mongo.Cursor<Feedback> = await students.find();
     await cursor.toArray();
     → siehe function giveFeedback
     */
    return students;
  }

  /*
  async function connectToDB(_url: string): Promise<void> {
    let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
  
    let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
    await mongoClient.connect();
  
    let students: Mongo.Collection = mongoClient.db("Test").collection("Student");
  
    // let s: Student = {name: "Max Mustermann", matrikel: 666};
    // students.insertOne(s);
  }
  */

  async function submitText(f: Feedback): Promise<string> {
    let students: Mongo.Collection = await connectToDB();
    let output: string = "";

    if (f.registration + "" == "NaN") {
      output = "Hast dich wohl vertippt. Macht nichts, try again! :3";
    }
    else if (await students.countDocuments({ "Matrikelnummer": f.registration }) != 0) {
      output = "Student*in mit dieser Matrikelnummer existiert bereits, du Knecht!!";
    }
    else {
      students.insertOne(f);
      output = "Feedback von '" + f.name + "' (" + f.registration + ") " + "hinzugefügt.";
    }
    return output;
  }

  async function giveFeedback(): Promise<Feedback[]> {
    let students: Mongo.Collection = await connectToDB();
    let cursor: Mongo.Cursor = students.find();
    let result: Feedback[] = await cursor.toArray();
    return result;
  }
}


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