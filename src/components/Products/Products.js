import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props);
    const {handleCart, product} = props
    const { name, img2, price } = product;

    return (
        <div className='product p-2 m-3 border-solid border-2 border-orange-500 rounded-xl'>
            <div>
                <img className='rounded-xl' src={img2} alt=""/>
                <p className='text-2xl py-2 text-center'>Name: {name}</p>
                <p className='text-center text-lg'>Price: {price}</p>
                <div className='btn-cart'>
                    <button onClick={() => handleCart(product)}>Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                </div>
                
            </div>
        </div>
    );
};

export default Products; 