import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IEkYpDZvyx2Fo7nqH84F87T0y9wbewKzwF7gPqEYfAPadbE8xzcCHdpmCpSDDvYrANhS2sk9Dg0U7TFyIXDrhRA00Lh9EuWKp';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return(
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddres
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />

  );
};

export default StripeCheckoutButton;