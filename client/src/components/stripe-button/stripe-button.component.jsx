import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableStripeKey =
    'pk_test_51GwquRKIfF8I2iweRTePPmfzqSVH4JgkBhZMtEhmostDNje03nIgkB2lmN9GY8mxd9lNpdiu2vu5crmWgQhuFzLR00klTXMTmn';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with payment. Please use test card detail provided on the page'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableStripeKey}
    />
  );
};

export default StripeCheckoutButton;
