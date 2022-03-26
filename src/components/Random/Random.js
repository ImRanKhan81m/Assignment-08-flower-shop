import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash, } from '@fortawesome/free-solid-svg-icons';
import './Random.css'

const Random = (props) => {
    const {img, name} = props.random;
    return (
        <div>
            <div className='cart'>
            <h6>Yeah...!! it's time to buy</h6>
            <div className='cart-details'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <button><FontAwesomeIcon className='icon'icon={faTrash}/></button>
            </div>
            
        </div>
        </div>
    );
};

export default Random;