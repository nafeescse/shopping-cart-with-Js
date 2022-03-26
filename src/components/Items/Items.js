import React from 'react';
import './Items.css'
const Items = (props) => {
    const { item } = props;
    return (
        <div className='items'>
            <img className='w-1/4 rounded-full' src={item.img2} alt="" />
            <div className='name-price flex justify-center'>
            <h2 className='name' key={item.id}> Name: {item.name}
            </h2>
            <p className='price'> price: {item.price}</p>
            </div>
            
        </div>
    );
};

export default Items;