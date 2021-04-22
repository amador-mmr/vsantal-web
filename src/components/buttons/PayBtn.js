import React from 'react';
import Loading from '../efects/Loading';
import {PayPalButton} from 'react-paypal-button-v2';

const CLIENT = {
    sandbox: "sandbox_key",
    production: "your_production_key"
};

const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;
//create button here
// let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later



class PayBtn extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          showButtons: false,
          price: props.price
        };
    }


    render() {
    
        return (
          <PayPalButton
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    currency_code: "EUR",
                    value: this.state.price
                  }
                }],
                // application_context: {
                //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
                // }
              });
            }}
            onApprove={(data, actions) => {
              // Capture the funds from the transaction
              return actions.order.capture().then(function(details) {
                // Show a success message to your buyer
                alert("Transaction completed by " + details.payer.name.given_name);
     
                // OPTIONAL: Call your server to save the transaction
                return fetch("/paypal-transaction-complete", {
                  method: "post",
                  body: JSON.stringify({
                    orderID: data.orderID
                  })
                });
              });
            }}
          />
        );
      }

} export default PayBtn;