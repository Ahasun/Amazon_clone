import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import {useHistory,useNavigate} from 'react-router-dom'
import { auth } from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'


function Login() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useNavigate()

  const signIn = (e) => {
    e.preventDefault()



    // Some fancy firebase login shitttttt
  }

  const register = (e) => {
    e.preventDefault();



        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              history('/')
              // ...
            })
            .catch((error) => alert(error.message));

    
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt=''
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => {
                setEmail(e.target.value) 
                //console.log(email)
            }
        }
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  )
}

export default Login