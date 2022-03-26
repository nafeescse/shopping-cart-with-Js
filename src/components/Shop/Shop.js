import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart.js';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    console.log(cart);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

 
    const handleCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }




    return (

        <div className='shop bg-orange-200'>

            <div className="products">

                {products.map(product => <Products key={product.id} product={product} handleCart={handleCart} ></Products>)
                }
            </div>


            <div className="cart">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;