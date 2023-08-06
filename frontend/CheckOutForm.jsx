import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error(error.message);
      } else {
        const response = await fetch("http://localhost:5000/process-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
        });

        const data = await response.json();

        console.log(data);

        navigate("/success");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white border rounded-md shadow-md flex w-[55%] h-[30%] justify-between">
      <div className="flex flex-col w-[50%] p-8 my-auto gap-2 ">
        <div>
          <h1 className="text-2xl">Complete Payment</h1>
          <p className="block text-gray-500 mb-4 text-xs">
            Enter your credit/debit card details below
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <div className="bg-white border rounded py-2 px-4">
              <CardElement
                id="card-element"
                options={{ style: { base: { fontSize: "10px" } } }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#1E4C90] hover:bg-blue-600 text-white font-bold py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={!stripe}
          >
            Confirm Payment
          </button>
        </form>
      </div>
      <div className="bg-gray-200 rounded p-8 w-[50%]">
        <div className="my-auto flex flex-col gap-4 justify-evenly h-full py-8">
          <h2 className="text-xl mb-2">Order Summary</h2>
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex justify-between">
              <p className="w-[50%]">Plan Name</p>
              <p className="text-right w-[50%]">Basic</p>
            </div>
            <div className="bg-gray-300 w-full h-[1px]" />
            <div className="flex justify-between">
              <p className="w-[50%]">Billing Cycle</p>
              <p className="text-right w-[50%]">Monthly</p>
            </div>
            <div className="bg-gray-300 w-full h-[1px]" />
            <div className="flex justify-between">
              <p className="w-[50%]">Plan Price</p>
              <p className="text-right w-[50%]">$ 200/mo</p>
            </div>
            <div className="bg-gray-300 w-full h-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
