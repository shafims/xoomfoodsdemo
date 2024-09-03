import React, {createContext, useContext, useState, useReducer} from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const totalItems = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
}
export const totalPrice = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'Add':

        const existingItemIndex = state.findIndex(item => item.id === action.product.id);
        if( existingItemIndex > -1) {
            // Items already exists, update the quantity
            const updateCart = [...state];

            updateCart[existingItemIndex] = {
                ...updateCart[existingItemIndex],
                quantity: updateCart[existingItemIndex].quantity + 1
            };
            return updateCart;
        } else {
            // Item does not exist, add to the cart with quantity 1
            return [...state, {...action.product, quantity: 1 }];
        }

        case 'Remove':
            return state.filter(item => item.id!== action.id);

        case 'Increase':
            const increaseIndex = state.findIndex(item => item.id === action.id);
            if (increaseIndex > -1) {
                const updateCartIncrease = [...state];
                updateCartIncrease[increaseIndex] = {
                    ...updateCartIncrease[increaseIndex],
                    quantity: updateCartIncrease[increaseIndex].quantity + 1
                };
                return updateCartIncrease;
            }

        case 'Decrease':
            const decreaseIndex = state.findIndex(item => item.id === action.id);
            if (decreaseIndex > -1) {
                const updateCartDecrease = [...state];
                if (updateCartDecrease[decreaseIndex].quantity > 1) {
                    updateCartDecrease[decreaseIndex] = {
                        ...updateCartDecrease[decreaseIndex],
                        quantity: updateCartDecrease[decreaseIndex].quantity - 1
                    };
                    return updateCartDecrease;
                } else {
                    // Remove item if quantity is 1 and we are decreasing 
                    updateCartDecrease.splice(decreaseIndex, 1);
                }
                return updateCartDecrease;
            }
            default:
                return state;
    }

}

export const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(CartReducer, []);

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}