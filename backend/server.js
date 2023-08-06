// server.js
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51NbNaKSCehXzOAvryfgJOwHDPmXUphTD7oFk5oE0SMZwYhhuZAUKE9C5pe5LO5E4SbWR6i5gRoLxGs1fPm1m16Lr00yR8fr3ti"
);

app.use(cors());
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: "price_1NbnduSCehXzOAvrrACy2ivJ",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/process-payment", async (req, res) => {
  const { paymentMethodId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // Amount in cents (replace with the actual amount you want to charge)
      currency: "usd", // Replace with your desired currency
      payment_method: paymentMethodId,
      confirmation_method: "manual",
      confirm: true,
    });

    res.json({ success: true, paymentIntentId: paymentIntent.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Payment failed" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
