//import  {firebaseApp}  from "./firebase";
import dotenv from "dotenv";

dotenv.config();


var admin = require("firebase-admin");


//var serviceAccount = require("path/to/serviceAccountKey.json");
  const firebaseApp = 
 global.firebaseApp ??
admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    private_key_id: "1e1436ca5f0186ea34aa280c7d351321a69b9708",
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_id: "105760797702258519251",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-r16u7%40let-s-accommodate.iam.gserviceaccount.com"


  })

});

export default admin;


global.firebaseApp = firebaseApp;
