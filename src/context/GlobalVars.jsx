import React, { createContext, useState } from 'react'
import { products } from '../assets/frontend_assets/assets';



export let ShopContext=createContext();


const ContextProvider = ({children}) => {
    const [catogry,setCatogry]=useState([]);
    const [subCatogry,setSubCatogry]=useState([]);
    const [searchProduct,setSearchProduct]=useState('');
    const [showSearch,setShowSearch]=useState(false);
    const [payment,setPayment]=useState('');

    let delvery_fee=10;
    let currency="$";

    let addCatogry=(item)=> {
        setCatogry([...catogry,item]);
    }

    let addSubCatogry=(item)=> {
        setSubCatogry([...subCatogry,item]);
    }

    let removeCatogry=(item)=> {
        setCatogry(catogry.filter((ele)=> ele!==item));
    }

    let removeSubCatogry=(item)=> {
        setSubCatogry(subCatogry.filter((ele)=> ele!==item));
    }
    
    let val={
        products,
        currency,
        delvery_fee,
        catogry,
        subCatogry,
        addCatogry,
        addSubCatogry,
        removeCatogry,
        removeSubCatogry,
        searchProduct,
        setSearchProduct,
        showSearch,
        setShowSearch,
        payment,
        setPayment
    }
    return (
        <ShopContext value={val}>
            {children}
        </ShopContext>
    )
}

export default ContextProvider
