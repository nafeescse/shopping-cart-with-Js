import React from 'react';

const Products = (props) => {
    const {name, img1, price} = props.product;
    
    return (
        <div className='ptoduct grid grid-cols-3'>
            <img src={img1} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Products; 