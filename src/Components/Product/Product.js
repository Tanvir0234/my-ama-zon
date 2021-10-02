import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const{name,img,stock,seller,star,price}=props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
            <img src={img} alt="" />
            </div>
            <div className="product-detail">
            <h4>{name}</h4>
            <p><small>by : {seller}</small></p>
            <p>${price}</p>
            <small>only {stock} product stock</small>
            <br /><br />
            
            <Rating
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
          />
            <br />
            <button 
            onClick={()=> props.handleAddToCart(props.product)}
            className="add-btn">{element} add to cart</button>
            </div>
         </div>
    );
};

export default Product;