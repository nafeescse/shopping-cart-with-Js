import React from 'react';
import logo from '../../favicon.png'

const Header = () => {
    return (
        <div className=''>
            <img className='mx-auto' src={logo} alt="" />
            <div><p className='text-4xl font-bold my-2 text-center text-orange-600'>All Products</p></div>
        </div>
    );
};

export default Header;