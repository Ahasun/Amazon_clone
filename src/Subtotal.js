import React, { useState } from 'react'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';
import './Subtotal.css'

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();

    

    return (
        <div className='subtotal'>

            <CurrencyFormat

                renderText={ (value)=> (

                    <>
                         <p>Subtoatl({basket.length} items): <strong>{value}</strong></p>
                         
                         <small className='subtotal__gift'>
                             <input type="checkbox"/>This order contains a gift
                         </small>
                    </>
                    )
                
                }
                

                decimalScale={2}
                value={getBasketTotal(basket).toFixed(2)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />

            <button className="subtotal__button" onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
            
        </div>
    )
}

export default Subtotal
