import React from 'react';
import './Random.css'

const Random = (props) => {
    const { name} = props.random;
    return (
        <div>
            <div className='cart'>
            <div className='random-details'>
                <h2>{name}</h2>
            </div>
            
        </div>
        </div>
    ); 
};

export default Random;