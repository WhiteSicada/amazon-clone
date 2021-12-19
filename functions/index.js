const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51K7i9rI3BPtoAvjmNSiJI3wGKEEcYMNqm0Gb7aHQdJWjB7uHILiP8zz2CH4vaoX2qYNA1qpWSjT25O9l1bNEEMer00nfysLnEg"
);

const app = express();
var corsOptions = {
  origin: "http://localhost:3000/",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment REquest REceived BOOM§! for this amount : " + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);

//http://localhost:5001/challenge-feb4c/us-central1/api
