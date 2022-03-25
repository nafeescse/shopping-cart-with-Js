import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../../components/Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
        console.log(products);
    }, [])
    return (
        <div className='shop bg-orange-200'>
            <div className="products">
                    <p className='text-4xl font-bolder'>All Products</p>
                   { products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>


            <div className="cart"><p>hello cart</p></div>
        </div>
    );
};

export default Shop;