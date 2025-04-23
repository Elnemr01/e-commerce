import React, { useContext, useEffect, useState } from 'react'
import './latest.css'
import CommonTittle from '../commonTittle/CommonTittle'
import { ShopContext } from '../../context/GlobalVars'
import { Link } from 'react-router'
import Product from '../product/Product'
const LatestCollection = () => {
    let [latestProducts,setLatestProducts]=useState([]);
    let {products}=useContext(ShopContext);

    useEffect(()=> {
        setLatestProducts(products.slice(0,10));
    },[])

    return (
        <div>
            <CommonTittle word1={"latest"} word2={"collection"}/>
            <div className="latestProducts">
                {latestProducts.map((e,i)=> {
                    return <Link to={`product/${e._id}`} key={e._id}><Product product={e}/></Link>
                })}
            </div>
        </div>
    )
}

export default LatestCollection
