import React, { useContext, useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { UserContext } from '../../../App';


const SimpleCardForm = ({service}) => {
    const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const[loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
    }
  };

  const handlePayment = () =>{
      const orderDetail ={
          serviceName: service.serviceName,
          price: service.price,
          orderTime: new Date().toDateString()
      }
      const newOrder ={...loggedInUser, ...orderDetail};
      const url ='https://afternoon-refuge-27445.herokuapp.com/addOrder'
      fetch(url,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(newOrder)
      })
      .then(res => res.json())
      .then(data =>{
          if(data){
              alert('Your order have been placed');
          }
      })
  }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement />
               <button onClick={handlePayment} className="btn btn-warning mt-3" type="submit" disabled={!stripe}>
                Pay
            </button>
           
        </form>
        {
            paymentError && <p style={{color: 'red'}}>{paymentError} but Order proceed</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful</p>
        }
        </div>
    );
};

export default SimpleCardForm;