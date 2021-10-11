import React from 'react';
import { useHistory } from 'react-router';

import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReviw = () => {
    const [products] = useProducts();
    const [cart ,setCart]=useCart(products)
    const history=useHistory();
    const handleRemove= key =>{
      const  newCart = cart.filter(product => product.key!==key);
        setCart(newCart);
        removeFromDb(key);

    }

const handlePlaceOrder=()=>{
  history.push('/placeorder')
  setCart([]);           //clear cart from ui
  clearTheCart();       //clear cart  from local storage 
}    
    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                     {
                         cart.map(product=><ReviewItem 
                            key={product.key}
                            product={product}
                            handleRemove={handleRemove}
                            >
                            </ReviewItem>)
                     }
                </div>
                <div className="cart-container">
                   <Cart cart={cart}>
                       <button onClick={handlePlaceOrder} className="add-btn">Place Order</button>
                   </Cart>
                </div>

            </div>
        </div>
    );
};

export default OrderReviw;