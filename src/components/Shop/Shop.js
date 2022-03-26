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
        const newDetail = [...cart, product];
        setCart(newDetail);
    }
    const handleRandomProduct =(cart) =>{
        const randomProducts = cart[Math.floor(Math.random() * cart.length)]
        setRandomProduct(randomProducts);
    }
    
    return (
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
                <button className='first-btn' onClick={()=>handleRandomProduct(cart)}>CHOOSE 1 FOR ME</button>
                <button>CHOOSE AGAIN</button>
                <Random random={randomProduct}></Random>
                
                </div>
            </div>
        </div>
    );
};

export default Shop;