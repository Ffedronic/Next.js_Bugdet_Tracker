import { MongoClient } from "mongodb";
require("dotenv").config;

export async function insertOneDocument(collection, document) {
  let mongoClient;
  try {
    mongoClient = await connectToDatabase();
    const db = mongoClient.db();
    const insertToCollection = db.collection(collection);
    await insertToCollection.insertOne(document);
  } catch (error) {
    console.error("Insert Document failed!" + error);
    process.exit();
  } finally {
    await mongoClient.close();
  }
}

async function connectToDatabase() {
  let mongoClient;
  try {
    mongoClient = new MongoClient(
      `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_USER}@cluster0.ollxem8.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("Connecting to MongoDB Atlas...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");
    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}
