import React, { useContext } from 'react'
import './orderEle.css'
import { ShopContext } from '../../context/GlobalVars'

const OrderEle = ({product}) => {
    const {currency}=useContext(ShopContext);

    return (
        <div className='orderElement'>
            <div className="data">
                <div className="image">
                    <img src={product.image[0]} alt="check connection" loading='lazy'/>
                </div>
                <div className="textData">
                    <h2 className="name">{product.name}</h2>
                    <span>{currency}{product.price}</span>
                    <span className='quantity'>Quanty: {product.pieceNum}</span>
                    <span className='size'>Size: {product.chociedSize}</span>
                    <p className="date">Date:</p>
                    <p className="payment">Payment: {product.payment || 'COD'}</p>
                </div>
            </div>
            <div className="orderPlaced">
                <p></p>
                <p>order placed</p>
            </div>
            <button>track order</button>
        </div>
    )
}

export default OrderEle
