import React, { useContext } from 'react'
import './cartElement.css'
import { ShopContext } from '../../context/GlobalVars'
import { assets } from '../../assets/frontend_assets/assets';
import { useDispatch } from 'react-redux';
import { addProductWhenChangeNumber, removeProduct } from '../../reduxToolKit/cartSlice';

const CartElement = ({product}) => {
    const {currency}=useContext(ShopContext);
    let dispatch=useDispatch();

    const reRangeTheCart =(ev)=> {
        dispatch(addProductWhenChangeNumber({
            ...product,
            pieceNum: +(ev.target.value)
        }))
    }

    
    return (
            <div className='cartElement'>
                <div className="data">
                    <div className="image">
                        <img src={product.image[0]} alt="check connection" loading='lazy'/>
                    </div>
                    <div className="textData">
                        <h2 className="name">{product.name}</h2>
                        <span>{currency}{product.price}</span>
                        <span>{product.chociedSize}</span>
                    </div>
                </div>
                <input type="number" min={1} value={product.pieceNum || 1} onChange={(eve)=> reRangeTheCart(eve)}/>
                <img src={assets.bin_icon} alt="check connection" loading='lazy'
                onClick={()=> dispatch(removeProduct({_id:product._id,chociedSize:product.chociedSize}))}/>
            </div>
    )
}

export default CartElement
