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
            <div className="cart-content">
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
        </div>

        <div className='quiz-container'>
            <h1>Question Answer</h1>
            <div className='question'>
                <h3>1) How react works?</h3>
                <p> <b>Answer:</b> React is a JavaScript library for building user interfaces. React works in declarative code.We use declarative code to create components.React has virtual DOM. Virtual DOM will be an exact copy of real DOM and creates a list of those changes that need to be made to the actual DOM.</p>
            </div>
            <div className='question'>
                <h3>1) What is the difference between props and state in React?</h3>
                <h6>Answer: </h6>
                
            <table className="GeneratedTable">
               <thead>
                    <tr>
                      <th>Props</th>
                      <th>State</th>
                    </tr>
               </thead>
               <tbody>
                    <tr>
                       <td>1. Props are read-only.</td>
                       <td> 1. State changes can be asynchronous.</td>
                    </tr>
                    <tr>
                       <td>2. Props are immutable.</td>
                       <td>2. State is mutable.</td>
                    </tr>  
                    <tr>
                       <td>3. Props can be accessed by the child component.</td>
                       <td>3. State cannot be accessed by child components.</td>
                    </tr>  
                    <tr>
                       <td>4. Stateless component can have Props.</td>
                       <td>4. Stateless components cannot have State.</td>
                    </tr>  
                    <tr>
                       <td>4. Props make components reusable.</td>
                       <td>4. State cannot make components reusable.</td>
                    </tr>  
               </tbody>
            </table>


            </div>
        </div>

        <div className="footer">
            <p>Copyright © 2022-24. All Rights Reserved By Imran Hossen</p>
        </div>
        </div>
    );
};

export default Shop;