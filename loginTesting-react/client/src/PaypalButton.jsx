import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
  const PayPalClientId =
    "ARk3fkEqcIgaDOEmdG8xV_pt_uG3-ACKylj3kG6fjwIcO8LR1In1X8rBZgggZw6EXP57cpD5yNcHkv25";
  console.log(amount);
  return (
    <PayPalScriptProvider options={{ "client-id": PayPalClientId }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            // Handle successful payment
            onSuccess(details);
          });
        }}
        onError={(err) => {
          // Handle payment error
          onError(err);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
