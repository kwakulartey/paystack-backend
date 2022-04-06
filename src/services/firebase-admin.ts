//import  {firebaseApp}  from "./firebase";
import dotenv from "dotenv";

dotenv.config();


var admin = require("firebase-admin");


//var serviceAccount = require("path/to/serviceAccountKey.json");
  const firebaseApp = 
 global.firebaseApp ??
admin.initializeApp({
  credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
     
  })

});

export default admin.firestore();


global.firebaseApp = firebaseApp;
