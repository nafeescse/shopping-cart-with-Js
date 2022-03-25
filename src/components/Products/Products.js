import React from 'react';

const Products = (props) => {
    const {name, img2, price} = props.product;
    
    return (
        <div className='ptoduct grid grid-cols-3'>
            <img src={img2} alt="" />
            <p>Name: {name}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Products; 