import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
//----------------load data state -------
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setDisplayProducts(data)
        
        })
    },[])

//---------------after reload saty cart product---------------
    useEffect(()=>{
        if(products.length){//-------condition deoa surute akbar jokon load hoi product chara oita atkanur jonno if use kora hoise------
            const saveCart =getStoredCart();
            const storedCart =[];
            for(const key in saveCart){
                const addedProduct = products.find(product =>product.key === key);
                
                if(addedProduct){
                    const quantity = saveCart[key];
                    addedProduct.quantity =quantity;
                    //console.log(addedProduct) //koita product ache ta dehabe reload korleo 
                    storedCart.push(addedProduct)
                }
            }
            setCart(storedCart);
        }
        
    },[products])

//---------------click kore cart e dekhanur handler and state------------
   const [cart,setCart]=useState([])
   const handleAddToCart = (product) => {
       //existing bug fix ------
       const exists = cart.find(pd=>pd.key===product.key);
       let newCart=[];
       if(exists){ // existing cart bug fix
           const rest =cart.filter(pd=>pd.key!==product.key);
           exists.quantity = exists.quantity + 1;
           newCart =[...rest,product]
       }
       else{
           product.quantity = 1;
           newCart =[...cart,product];  
       }
     
    setCart(newCart);
    //-----save to local storage------
    addToDb(product.key)
   }
//--------------search field handle ------------
const [displayProducts, setDisplayProducts] = useState([])
    const handleSearch = (event)=>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase())) 
        setDisplayProducts(matchedProducts);
 }  
    return (
        <div>
            <div className="search-field">
                <input type="text" 
                onChange={handleSearch}
                placeholder='type to search...' />
            </div>
             <div className ="shop-container">
            <div className="product-container">
                
                {
                    displayProducts.map(product=><Product
                    key={product.key}
                    handleAddToCart ={handleAddToCart}
                    product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}>
                <Link to ="/review">
                           <button className="add-btn">Review your Order</button>

                       </Link>
                </Cart>
            </div>
            
        </div>
        </div>
       
    );
};

export default Shop;