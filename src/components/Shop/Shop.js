import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../../components/Products/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://run.mocky.io/v3/f0017a55-8f12-4b1b-88a7-850a64e46a3e')
            .then(res => res.json())
            .then(data => setProducts(data));
        console.log(products);
    }, [])
    return (
        
        <div className='shop bg-orange-200'>
            
            <div className="products">
                    
                   { products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>


            <div className="cart"><p>hello cart</p></div>
        </div>
    );
};

export default Shop;