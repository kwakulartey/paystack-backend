// import packages
import express from "express";
import { paymentRoutes } from "./routes";

// declare const vars
const PORT = process.env.PORT || 5008;

// create an instance of express
const app = express();
app.use(express.json());

// attach routes to server instance
app.use("/payments", paymentRoutes);
app.get("/", (rq, res) => res.json({ message: "Welcome to Paystack Backend" }));

app.listen(PORT, () =>
  console.log("🚀🚀🚀 Server is up and running on: ", PORT)
);

// package.json
// "prebuild": "tslint -c tslint.json -p tsconfig.json --fix",
//  "build": "tsc",
// "prestart": "npm run build",
// "start": "node dist/index.js",
