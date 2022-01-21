import express from "express";
import Stripe from "stripe";

const app = express();
const port = 3000;
const PUBLISHABLE_KEY =
  "pk_test_51K5Xv8FTDfvNWTlBDZOFUUpz7yp8KldtNXsUc1oVV8TJxQv0aEYeiPfz1o09GXBGkXluJUU2nrzk6HaMvcF0Q7X400e2aoMFXu";
const SECRET_KEY =
  "sk_test_51K5Xv8FTDfvNWTlB31cdCBJKdV0gZL2zxspWOJjXvFbtaBWpQK1uvjCrmsUHXNSZ8HG8JihJDC6UFA2u5TcnrdcP00ZN9JMBsa";

const stripe = Stripe(SECRET_KEY, { apiVersion: "2020-08-27" });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1099, //lowest denomination of particular currency
      currency: "myr", //usd
      payment_method_types: ["card"], //by default
    });

    const clientSecret = paymentIntent.client_secret;

    res.json({
      clientSecret: clientSecret,
    });
  } catch (e) {
    console.log(e.message);
    res.json({ error: e.message });
  }
});
