import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total, prd)=> total + prd.price , 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 12.90;
    if(total < 100){
        shipping = 0;
    }
    else if(total>15){
        shipping = 3.99;
    }
    const tax = total/10;
    const formatNumber = (num) =>{
        const presisiton = num.toFixed(2)
        return Number(presisiton)
    }
    const grandTotal = total + shipping + tax
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product rice {formatNumber(total)}</p>
            <p>shipping Cost: {formatNumber(shipping)}</p>
            <p>tax: {formatNumber(shipping)} </p>
            <p>Total Price {formatNumber(grandTotal) }</p>
        </div>
    );
};

export default Cart;