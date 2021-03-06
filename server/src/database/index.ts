import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();
import { Listing } from '../listings'
​
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/test?retryWrites=true&w=majority`;
​
export const connectDatabase = async () => {
  const client = await MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = client.db("main");

  return {
    listings: db.collection<Listing>("listings_2")
  };
};


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://user_001:<password>@cluster0.ocs2m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
