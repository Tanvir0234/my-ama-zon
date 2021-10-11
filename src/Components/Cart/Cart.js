import React from 'react';

const Cart = (props) => {
     
    const {cart}=props;
    let total = 0;
    let totalQuantity = 0;
    for(let product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping =total > 0 ? 15: 0;//if condition simplify
    const tex = (total+shipping) * 0.10;
    const grandTotal = total + shipping+tex ;

    return (
        <div>
            <h4>Order sumary </h4>
            <h5>Order items :{totalQuantity}</h5>
            <br />
            <h5>total :{total.toFixed(2)}</h5>
            <h5>Shipping :{shipping.toFixed(2)}</h5>
            <h5>Tex :{tex.toFixed(2)}</h5>
            <h5>Grand Total :{grandTotal.toFixed(2)}</h5>
            {props.children}
        </div>
    );
};

export default Cart;