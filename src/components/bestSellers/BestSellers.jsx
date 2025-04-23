import React, { useContext, useEffect, useState } from 'react'
import "./../latestCollection/latest.css"
import CommonTittle from '../commonTittle/CommonTittle'
import { ShopContext } from '../../context/GlobalVars';
import { Link } from 'react-router';
import Product from '../product/Product';

const BestSellers = () => {
    let[bestSellers,setBestSellers]=useState([]);
    let {products}=useContext(ShopContext);

    useEffect(()=>{
        setBestSellers(products.filter((p)=> p.bestseller===true).slice(0,5));
    },[])

    return (
        <div>
            <CommonTittle word1={"best"} word2={'sellers'}/>
            <div className="bestSellers">
                {bestSellers.map((e)=> {
                    return <Link to={`/product${e._id}`} key={e._id}><Product product={e}/></Link>
                })}
            </div>
        </div>
    )
}

export default BestSellers
