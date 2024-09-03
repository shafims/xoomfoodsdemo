import React, {useState} from 'react'
import Header from './Header'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const email1 = "test@example.com";
    const password1 = 12345;
 
    const onChangeEmail = (e)=> {
        setEmail(e.target.value)
    }
    const onChangePassword = (e)=> {
        setPassword(Number(e.target.value));
    }
    const ValidateForm = () => {
        return email === email1 && password === password1;
    }
    const onLoginSuccess = (jwt) => {
        Cookies.set('jwt', jwt, { expires: 30 });  // 1 day expiry
        navigate('/');
    }
    const submitForm = (e) => {
        e.preventDefault();
        const data = [email, password]
        if(ValidateForm(data)) {
            onLoginSuccess(data);
        } else {
            alert('Invalid Credentials')
        }
    }

  return (
    
    <div style={{background: '#1c8ef9'}}>
        <Header/>
      <div className='vh-100 d-flex align-items-center justify-content-center'>
      <div className='w-25  mx-auto shadow-lg rounded-4' style={{backgroundColor:'#fff'}}>
        <form className='p-3' onSubmit={submitForm}>
          <h1>Login</h1>
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input type='text' value={email} onChange={onChangeEmail} className='form-control' id='username' placeholder='Enter username' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type='password' value={password} onChange={onChangePassword} className='form-control' id='password' placeholder='Enter password' />
          </div>
          <button type='submit' className='btn btn-primary w-100'>Login</button>
          <p>You Don't Have Account</p>
          <Link to='/signup'>Signup</Link>
        </form>
      </div>

    </div>
    </div>
  )
}

export default Login
