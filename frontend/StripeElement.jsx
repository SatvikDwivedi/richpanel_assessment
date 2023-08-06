import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import CheckoutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NbNaKSCehXzOAvrQnCSwf5MIRLYlfYlGsjJafkvJQq403xPWwHPSTwTZMhSs38yYyL0GdFzsHHpdjE1ZBLEPPV600J3X2mpbC"
);

function StripeElement() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default StripeElement;
