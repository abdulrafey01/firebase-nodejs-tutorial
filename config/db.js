var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

let db = connectDb();

function connectDb() {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    // Access Firestore
    const db = admin.firestore();

    console.log("Database connected");
    return db;
  } catch (error) {
    console.log("Database not connected", error);
  }
}

module.exports = db;
