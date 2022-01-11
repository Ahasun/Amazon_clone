const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51KA5fyLjihqxj1TweYEns6krQNokRLO2EteZz2gLHYGQ6ur5sK12go7c21roak0i2rNUIgjZgrCZo4tIKSLt3jIN00YMMrf6Lu");


const app=express(); 

app.use(cors({ origin: true }));
app.use(express.json());

app.get('/',(request,response) => response.status(200).send ("Hello world"));



app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const  paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency:"usd",
    })

    response.status(201).send({
        clientSecrete : paymentIntent.clientSecrete
    })
})

exports.api=functions.https.onRequest(app);

//http://localhost:5001/clone-b8941/us-central1/api