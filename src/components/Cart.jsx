import React from 'react'
import Header from './Header';
import { useCart } from '../contexts/CartContext';
import { totalItems, totalPrice } from '../contexts/CartContext';
import './cart.css';
import { Link } from 'react-router-dom';

function Cart() {

    const { cart } = useCart();
    const { dispatch } = useCart();

    const Increase = (id) => {
        const Index = cart.findIndex(p => p.id === id);
        if (Index > -1) {
            dispatch({ type: 'Increase', id });
        }
    }
    const Decrease = (id) => {
        dispatch({ type: 'Decrease', id });
    }


    return (
        <div className='main-container'>
            <Header />
            <div className='container'>
                {cart.length === 0 ? (
                    <div className='flex text-center'>
                        <img src='http://localhost:5174/src/assets/Add%20to%20Cart-amico.svg' alt='Add to Cart' className='w-25' />
                        <h1>Your cart is empty now</h1>
                        <p className='text-gray'>Looks like your cart is hungry! Why not add some items?</p>
                        <button className='btn btn-primary'>
                            <Link className='text-white text-decoration-none' to={'/products'}>Products</Link>
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className='row mt-3 d-flex' >
                            {
                                cart.map((item, index) => (
                                    <div className='col-md-6 d-flex' ey={item.id}>
                                        {/* <div className='d-flex col-md-8' k> */}
                                            <img src={item.images} alt={item.name} className='w-25 h-25' />
                                            <div className='details ms-4' >
                                                <h4>{item.title}</h4>
                                                <p className='ellipsis'>{item.description}</p>
                                                <h5>${item.price}</h5>
                                                <div className='buttons pb-2' >
                                                    <button className='rounded btn btn-primary' onClick={() => Decrease(item.id)}><b>-</b></button>
                                                    {/* <button className='rounded'>Quantity: {item.quantity}</button> */}
                                                    <span>Quantity: {item.quantity}</span>
                                                    <button className='rounded btn btn-primary' onClick={() => Increase(item.id)}><b>+</b></button>
                                                </div>
                                                <button className='btn btn-warning' style={{ height: 'fit-content' }} onClick={() => dispatch({ type: 'Remove', id: item.id })} >Remove</button>
                                            </div>
                                        {/* </div> */}
                                    </div>
                                ))
                            }
                            <div className='col-md-6' >
                                <div className='bg-secondary' >
                                    <h5 className='text-white'>Total Items: {totalItems(cart)}</h5>
                                    <h5 className='text-white'>Total Price: ${totalPrice(cart)}</h5>
                                    <button className='btn btn-primary'>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
