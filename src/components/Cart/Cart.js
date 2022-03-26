import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {img, name} = props.carts;
    return (
        <div className='cart'>
            <div className='cart-details'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <button><FontAwesomeIcon className='icon'icon={faTrash}/></button>
            </div>
            
        </div>
    );
};

export default Cart;