import React, { useState, useEffect } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import {CardElement , useStripe, useElements} from  '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const navigate = useNavigate();
  
  const stripe = useStripe();
  const elements = useElements();

  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const [error,setError] = useState(null);
  

  useEffect(()=>{

    const getClientSecret = async() =>{

        const response = await axios({

          method : 'post',
          url : `/payments/create?total=${getBasketTotal(basket)*100}`
        });
        setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  },[basket]);

  const handleSubmit = async(e) =>{

    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret,{

      payment_method: {
        card : elements.getElement(CardElement)
      },
    }).then(({paymentIntent})=>{
      console.log("navigate Print kaj korena kn");
      
      setSucceeded(true);
      setProcessing(false)
      setError(null)
      
      console.log("navigate Print kaj korena kn?why man why?");
      
      //navigate("/checkout", {replace: true})

  })
}
  
  const handleChange= e => {

    setDisabled(e.empty);
    setError(e.error ? e.error.message:"");

  }





  return (
    <div className='payment'>
      <div className='payment__container'>
        <h1>Checkout {<Link to='/checkout'>{basket?.length} items</Link>}</h1>
        {/* Payment section - delivery address */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment__address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment section - Review items */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Review items and delivery</h3>
          </div>
          <div className='payment__items'>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className='payment__section'>
          <div className='payment__title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment__details'>
              <form onSubmit={handleSubmit}>

                  <CardElement onChange={handleChange}/>
                  <div className="payment__priceContainer">
                      <CurrencyFormat

                          renderText={ (value)=> 
                          (
                             <><h3>Order Total: <strong>{value}</strong></h3></>)
                          }
                          decimalScale={2}
                          value={getBasketTotal(basket).toFixed(2)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}

                      />
                      <button disabled={processing || disabled || succeeded}>

                              <span>
                                {
                                    processing? <p>Processing</p> : "Buy Now"
                                }
                              </span>
                      </button>
                  </div>
                  {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment