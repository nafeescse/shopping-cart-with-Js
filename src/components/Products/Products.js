import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = (props) => {
    const { name, img2, price } = props.product;

    return (
        <div className='product p-2 m-3 border-solid border-2 border-orange-500 rounded-xl'>
            <div>
                <img className='rounded-xl' src={img2} alt=""/>
                <p className='text-xl py-2'>Name: {name}</p>
                <p>Price: {price}</p>
                <div className='btn-cart'>
                    <button>Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
                </div>
                
            </div>
        </div>
    );
};

export default Products; 