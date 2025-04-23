import React, { useContext } from 'react'
import "./search.css"
import { assets } from '../../assets/frontend_assets/assets'
import { ShopContext } from '../../context/GlobalVars'
import { useLocation } from 'react-router'


const SearchContainer = () => {

    const {setSearchProduct,showSearch,setShowSearch}=useContext(ShopContext);
    
    return showSearch ? (
        <div className="search">
            <input type="text" placeholder='search' onChange={(ev)=> setSearchProduct(ev.target.value)}/>
            <img src={assets.search_icon} alt="please wait" loading='lazy'/>
            <img src={assets.cross_icon} alt="please wait" loading='lazy' onClick={()=> setShowSearch(false)}/>
        </div>
    ) : null
}

export default SearchContainer
