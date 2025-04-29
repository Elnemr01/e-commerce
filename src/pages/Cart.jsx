import React, { useContext, useEffect, useState } from 'react'
import './pagesStyles/cartPage.css'
import { useSelector } from 'react-redux';
import CommonTittle from '../components/commonTittle/CommonTittle';
import CartElement from '../components/cartElement/CartElement';
import { ShopContext } from '../context/GlobalVars';
import { Link } from 'react-router';



const Cart = () => {
    const [chiocedProducts,setChiocedProducts]=useState([]);
    const [totalPrice,setTotalPrice]=useState(0);
    const cart=useSelector(state=>state.cart);
    const {delvery_fee,currency}=useContext(ShopContext);



    useEffect(()=> {
        setChiocedProducts(cart);
        setTotalPrice(cart.reduce((acc,e)=> acc+((e.price)*(e.pieceNum)),0));
    },[cart]);

    return (
        <div className='cartPage'>
            <div className="choicenProducts">
                <CommonTittle word1={"your"} word2={'cart'} showP={false}/>
                <div className="products">
                    {
                    chiocedProducts.map((e,i)=> {
                        return <CartElement product={e} key={i}/>
                    })
            }
                </div>
            </div>

            <div className="total">
                <div>
                    <CommonTittle word1={"cart"} word2={'totals'} showP={false}/>
                    <div className="countTotal">
                        <p>
                            <span>Subtotal</span>
                            <span>{currency}{totalPrice}</span>
                        </p>
                        <p>
                            <span>Shipping Fee</span>
                            <span>{currency}{delvery_fee}</span>
                        </p>
                        <p>
                            <span>Total</span>
                            <span>{currency}{`${cart.length===0? 0 : totalPrice+delvery_fee}`}</span>
                        </p>
                    </div>
                    <Link to={'/place-order'}><button>proceed to checkout</button></Link>
                </div>
            </div>
            
        </div>
    )
}

export default Cart
