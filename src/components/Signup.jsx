import React from 'react'
import { useFormData } from '../contexts/FormContext'
import './signup.css'
import Header from './Header';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const { formData, handleInputChange, handleSubmit } = useFormData();

    return (
        <div style={{background: '#1c8ef9'}}>
            <Header/>
            <div className='vh-100 d-flex align-items-center justify-content-center'>
                <div className='w-sm-75 w-md-50 w-lg-25 mx-auto shadow-lg rounded-4' style={{backgroundColor:'#fff'}}>
                    <form className='p-3' onSubmit={handleSubmit}>
                        <h1>Register</h1>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input
                                type="text"
                                id='name'
                                value={formData.name}
                                name='name'
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Enter username"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={formData.email}
                                name='email'
                                onChange={handleInputChange}
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={formData.password}
                                name='password'
                                onChange={handleInputChange}
                                placeholder="Enter password"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                name='confirmPassword'
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder='Enter confirmPassword'
                                required
                            />
                        </div>
                        <button type="submit" className='btn btn-primary w-100'>Register</button>
                        <p>Already Have an Account</p>
                            <Link to='/login'>Login</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
