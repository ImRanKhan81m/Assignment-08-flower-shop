import React from 'react';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = (props) => {
    const {name, img, price} =props.product;
    const {handleAddToCart, product} = props;
    return (
        <div className='product'>
            <img src= {img} alt="" />
            <div className='product-info'>
                 <h3 className='product-name'>{name}</h3>
                 <p>Price: ${price}</p>
                 <button onClick={() => handleAddToCart(product)}>Add To Cart <FontAwesomeIcon className='icon' icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;