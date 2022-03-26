import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Random from '../Random/Random';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomProduct, setRandomProduct] =useState([]);


    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    
    
    const handleAddToCart =(product) =>{
        const cartArray = [...cart, product];
        setCart(cartArray);
    }
    const handleRandomProduct =(cart) =>{
        const randomProducts = cart[Math.floor(Math.random() * cart.length)]
        setRandomProduct(randomProducts);
    }
    const handleRemoveCart =() =>{
        setCart([]);
        setRandomProduct([])
    }
    
    return (
        <div className='shop-container'>
            <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                 <h2>Selected Flowers</h2>
                {
                    cart.map(carts => <Cart key={carts.id} carts={carts}></Cart>)
                }
                <div className='btn'>
                <button onClick={()=>handleRandomProduct(cart)}>CHOOSE 1 FOR ME</button>
                <button onClick={handleRemoveCart}>CHOOSE AGAIN</button>
                <Random random={randomProduct}></Random>
                
                </div>
            </div>
        </div>

        <div className='quize-container'>
            <h1>Question Answer</h1>
            <div className='question'>
                <h3>1) How react works?</h3>
                <p> <b>Answer:</b>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam libero, totam eum explicabo ratione praesentium necessitatibus voluptatibus provident porro, nulla fuga voluptates laborum illo sint molestiae itaque consequuntur? Vitae at hic a eveniet? Iure nostrum quos architecto laboriosam molestias deleniti velit ratione, quis tempora eos consectetur repudiandae esse sit adipisci ut magnam. Atque, omnis explicabo quos dignissimos placeat earum quasi!</p>
            </div>
            <div className='question'>
                <h3>1) How react works?</h3>
                <p> <b>Answer:</b>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam libero, totam eum explicabo ratione praesentium necessitatibus voluptatibus provident porro, nulla fuga voluptates laborum illo sint molestiae itaque consequuntur? Vitae at hic a eveniet? Iure nostrum quos architecto laboriosam molestias deleniti velit ratione, quis tempora eos consectetur repudiandae esse sit adipisci ut magnam. Atque, omnis explicabo quos dignissimos placeat earum quasi!</p>
            </div>
        </div>
        </div>
    );
};

export default Shop;