import React, { useState } from 'react';
import './Cart.css';
import Items from '../../components/Items/Items'

const Cart = (props) => {
    const {cart  } = props;


    // console.log('cart', cart);

    // const {img2, name, price} = cart;
    // let img = [];
    // let name = '';
    // for (const product of cart) {
    //     // console.log(product);
    //     // img.push(product);
    //     // console.log(img);
    //     // name = product.name;
    // }

    let newRandom;
    const handleRandom = (product) => {
        let randomArray = [];
        const len = product.length;
        console.log(len);
        const ran = Math.floor(Math.random() * (len + 1));
        console.log(ran);
        if (ran === 0) {
            newRandom = product[ran];
            console.log(newRandom);
            // setRandom(newRandom);
            randomArray.push(newRandom);
            console.log(randomArray);
        } else {
            newRandom = product[ran - 1];
            console.log(newRandom);
            randomArray.push(newRandom);
            console.log(randomArray);
            // setRandom(newRandom);
        }


        ;
    }
    return (
        <div className='cart'>
            <h3 className='cart-title text-2xl text-center text-'>Selected Items: {cart.length}</h3>
            <div>
                {cart.map(item =>
                    <Items key={item.id} item={item}></Items>
                )}
            </div>
            <div className='btn-random'>
            <button onClick={() => {handleRandom(cart)}} className=''>Add a random item</button>
            </div>
            <h3 className='cart-title text-2xl text-center text-'>Random Items:
            <div>
            {/* {randomArray[0]} */}
            </div>
            </h3>
        </div>
    );
};

export default Cart;