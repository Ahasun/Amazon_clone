
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import Payment from './Payment'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51KA5fyLjihqxj1Tw0aCYvK434bRw0UStD1riSWOVQmZEphyhIdDXTE0daeKHhHAgoN659WpsxCm6dVq0Cmj0wc6l00BH921sxG'
  );
function App() {

  const [{},dispatch]=useStateValue();
  const auth = getAuth();

  useEffect( ()=>{

      onAuthStateChanged(auth, (authuser)=>{
        
          if(authuser){


            dispatch({
              type : "SET_USER",
              user : authuser,
            })
            
          }
          else{

            dispatch({
              type : 'SET_USER',
              user : null,
            })
          }


      });


  },[])

  return (
    <Router>
    
     <div className="App">


 

        <Routes>

            <Route path="/" element={<><Header /><Home /></>} />
            <Route path="/checkout" element={<><Header /><Checkout /></>}/>
            <Route path="/login" element={<> <Login /></>} />
            <Route path="/payment" element={ 
              
              <Elements stripe={promise}>
                  <Header/>
                  <Payment/> 

              </Elements>
            }     
            />



        </Routes>

      </div>
    </Router>

      
  );
}

export default App;
