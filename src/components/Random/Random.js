import React from 'react';
import './Randdom.css'

const Random = (props) => {
    const {item, array } = props;
    console.log(item);
    return (
        // <div>Random</div>
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

export default Random;