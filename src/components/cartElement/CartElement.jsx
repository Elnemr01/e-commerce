import React, { useContext } from 'react'
import { ShopContext } from '../../context/GlobalVars'
import { assets } from '../../assets/frontend_assets/assets';

const CartElement = ({product}) => {
    const {currency}=useContext(ShopContext);
    
    return (
            <div className='cartElement'>
                <div className="data">
                    <div className="image">
                        <img src={product.image[0]} alt="check connection" loading='lazy' />
                    </div>
                    <div className="textData">
                        <h2 className="name">{product.name}</h2>
                        <span>{currency}{product.price}</span>
                        <span>{product.chociedSize}</span>
                    </div>
                </div>
                <input type="number" value={product.pieceNum}/>
                <img src={assets.cart_icon} alt="check connection" loading='lazy' />
            </div>
    )
}

export default CartElement
