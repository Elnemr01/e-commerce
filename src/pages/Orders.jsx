import React, { useContext, useEffect, useState } from 'react'
import './pagesStyles/ordersPage.css'
import CommonTittle from '../components/commonTittle/CommonTittle'
import { useSelector } from 'react-redux'
import OrderEle from '../components/orderElement/OrderEle'
import { ShopContext } from '../context/GlobalVars'

const Orders = () => {
    const orders=useSelector(state=> state.orders);
    const [myOrders,setMyOrders]=useState([]);
    const {payment}=useContext(ShopContext);

    useEffect(()=> {
        setMyOrders(orders);
    },[orders]);

    return (
        <div className='ordersPage'>
            <CommonTittle word1={'my'} word2={'orders'} showP={false}/>
            <div className="orders">
                {
                    myOrders.map((e,i)=> <OrderEle product={{...e,payment}} key={i}/>)
                }
            </div>
        </div>
    )
}

export default Orders
