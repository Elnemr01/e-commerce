import React, { useContext } from 'react'
import "./product.css"
import { ShopContext } from '../../context/GlobalVars'


const Product = ({product}) => {
    let {currency}=useContext(ShopContext);
    return (
        <div className='product'>
            <div className="image">
                <img src={product.image[0]} alt="check connection" loading='lazy' />
            </div>
            <p className="name">{product.name}</p>
            <p className="price">{currency}{product.price}</p>
        </div>
    )
}

export default Product
