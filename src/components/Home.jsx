import React, {useState} from 'react'
import Header from './Header';
import Cookies from 'js-cookie'
import { useNavigate, Navigate } from 'react-router-dom';

function Home() {
  
  const [isVisible, setIsVisible] = useState(true);

  const navigate = useNavigate()
  const [zipCode, setZipCode] = useState('');
  // const [isToggle, setIsToggle] = useState(false)
  const onChangeZipCode = (e) => {
    setZipCode(e.target.value);
  } 
  const onSubmitSuccess = (zip) => {
    Cookies.set('zip', zip, { expires: 30 });  // 1 day expiry
    navigate('/products')
  }
  const zip =12345;
  const onSubmit = (e) => {
    e.preventDefault();
    setZipCode(Number(e.target.value));
    if(zip === Number(zipCode)) {
      onSubmitSuccess(zipCode);
    } else {
      alert('Invalid credentials')
    }
  }

  const remove = () => {
    setIsVisible(false); 
  }

  return (
    <div className='main-container'>
      <Header/>
      {isVisible && (
        <div className='rest-meal-sub-ser'>
        <div className='ser-text bg-black py-2 text-center'>
          <small className='text-white'>
            #1 Restaurant Meal Subscription Service.
          </small>
          <button className='bg-black text-white float-end' onClick={remove}><span className='bi bi-x'></span></button>
        </div>
      </div>
      )}
      <div className='Zip-code-section mt-5'>
      <form className='w-25 mx-auto' onSubmit={onSubmit}> 
          <div className=''>
            <label  className='form-label'>Enter your Zip Code</label>
            <div className='input-group'>
              <input type='text' className='form-control' value={zipCode} onChange={onChangeZipCode}  placeholder='Zip Code' />
              <button type='submit' className='btn btn-primary'>Check</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
