import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart.js';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([]);
    console.log(cart);
    console.log(random);

    // https://run.mocky.io/v3/f0017a55-8f12-4b1b-88a7-850a64e46a3e
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    // useEffect(() => {
    //     console.log('pore');
    //     const storedCart = getStoredCart();
    //     const savedCart = [];
    //     for(const id in storedCart){
    //         const addedProduct = products.find(product => product.id === id);
    //         if(addedProduct){
    //             const qnty = storedCart[id];
    //             addedProduct.quantity = qnty;
    //             console.log(addedProduct);
    //             savedCart.push(addedProduct);
    //         }
    //     }
    //     setCart(savedCart)
    // },[products])
    // const getStoredCart = () => {
    //     let shoppingCart = {};

    //     //get the shopping cart from local storage
    //     const storedCart = localStorage.getItem('shopping-cart');
    //     if(storedCart){
    //         shoppingCart = JSON.parse(storedCart);
    //     }
    //     return shoppingCart;
    // }

    const handleCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // const handleRandom = (product) => {
    //     const len = product.length;
    //     console.log(len);
    //     const ran = Math.floor(Math.random() * (len + 1));
    //     console.log(ran);
    //     if (ran === 0) {
    //         const newRandom = product[ran];
    //         console.log(newRandom);
    //         setRandom(newRandom);
    //     } else {
    //         const newRandom = product[ran - 1];
    //         console.log(newRandom);
    //         setRandom(newRandom);
    //     }

    //     ;
    // }




    return (

        <div className='shop bg-orange-200'>

            <div className="products">

                {products.map(product => <Products key={product.id} product={product} handleCart={handleCart} ></Products>)
                }
            </div>


            <div className="cart">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;

// const arr = [1,2,5,4,8];
// const len = arr.length;
// console.log(len);
//     const ran = Math.floor(Math.random() * (len + 1));
//     console.log(ran);