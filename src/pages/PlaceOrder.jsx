import React, { useContext, useEffect, useState } from 'react'
import './pagesStyles/placeOrderPage.css'
import CommonTittle from '../components/commonTittle/CommonTittle'
import { ShopContext } from '../context/GlobalVars'
import { useDispatch, useSelector } from 'react-redux';
import { assets } from '../assets/frontend_assets/assets';
import { Link } from 'react-router';
import { addOrder } from '../reduxToolKit/myOrdersSlice';

const PlaceOrder = () => {
    const {delvery_fee,currency}=useContext(ShopContext);
    const cart=useSelector(state=> state.cart);
    const [totalPrice,setTotalPrice]=useState(0);
    const {setPayment}=useContext(ShopContext);
    const dispatch=useDispatch();

    useEffect(()=> {
        setTotalPrice(cart.reduce((acc,e)=> acc+((e.pieceNum)*(e.price)) ,0));
    },[cart]);

    const handlePayment=(ev)=> {
        setPayment(ev.target.id);
    }




    return (
        <div className='placeOederPage'>
            {/* first part */}
            <div className="firstPart">
                <CommonTittle word1={'delivery'} word2={'information'} showP={false}/>
                <form action="">

                        <div className="name doubleInpt">
                            <input type="text" placeholder='first name' required/>
                            <input type="text" placeholder='last name'/>
                        </div>

                        <input type="email" name="email" id="email" placeholder='email'/>
                        <input type="text" placeholder='street' id="street"/>

                        <div className="address doubleInpt">
                            <input type="text" placeholder='city'/>
                            <input type="text" placeholder='state'/>
                        </div>
                        <div className="country doubleInpt">
                            <input type="number" placeholder='zip code'/>
                            <input type="text" placeholder='countery'/>
                        </div>

                        <input type="number" placeholder='phone' id="phone"/>
                </form>
            </div>
            {/* second part */}
            <div className="secondPart">
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
                        
                    </div>
                </div>
                <div className="paymentMethod">
                    <CommonTittle word1={'payment'} word2={'methods'} showP={false}/>
                    <div className="methods">
                        <div className="method">
                            <input type="radio" name="payment" id="stripe" onChange={(ev)=> handlePayment(ev)}/>
                            <label htmlFor="stripe">
                                <img src={assets.stripe_logo} alt="check connection" loading='lazy'/>
                            </label>
                        </div>

                        <div className="method">
                            <input type="radio" name="payment" id="razorpay" onChange={(ev)=> handlePayment(ev)}/>
                            <label htmlFor="razorpay">
                                <img src={assets.razorpay_logo} alt="check connection" loading='lazy'/>
                            </label>
                        </div>

                        <div className="method">
                            <input type="radio" name="payment" id="cash on delivery" onChange={(ev)=> handlePayment(ev)}/>
                            <label htmlFor="cash">
                                cash delivery
                            </label>
                        </div>

                    </div>
                    <Link to={'/orders'} onClick={()=> dispatch(addOrder(cart))}>place order</Link>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder
