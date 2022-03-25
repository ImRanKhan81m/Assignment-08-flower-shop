import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    

    const handleAddToCart =(product) =>{
        const newDetail = [...cart, product];
        setCart(newDetail);
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
                <button>CHOOSE 1 FOR ME</button>
                <button>CHOOSE AGAIN</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;