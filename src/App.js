
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { getAuth,onAuthStateChanged } from 'firebase/auth';

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

        <Header/>

        <Routes>

          
            
            {/* <Route path="! /login" component={<Header/>}/> */}

            

            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="/login" element={<Login/>} />



        </Routes>

      </div>
    </Router>

      
  );
}

export default App;
