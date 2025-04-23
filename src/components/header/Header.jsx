import React, { useContext, useState } from 'react'
import './header.css'
import { Link } from 'react-router'
import {assets} from '../../assets/frontend_assets/assets' 
import { ShopContext } from '../../context/GlobalVars'

const Header = () => {
    let [visiable,setVisible]=useState(false);
    const {setShowSearch}=useContext(ShopContext);
    return (
        <>
        <header>
            <div className="logo">
                <Link to={'/'}><img src={assets.logo} alt="please wait" loading='lazy'/></Link>
            </div>
            <nav>
                <ul>
                    <li><Link to={'/'} className='ac'>home</Link></li>
                    <li><Link to={'/collection'}>collection</Link></li>
                    <li><Link to={'/about'}>about</Link></li>
                    <li><Link to={'/contact'}>contact</Link></li>
                </ul>
            </nav>
            <ul className="icons">
                <li><Link to={'/collection'}><img src={assets.search_icon} alt="please wait" loading='lazy' onClick={()=> setShowSearch(true)}/></Link></li>
                <li>
                    <Link to={'/login'}><img src={assets.profile_icon} alt="please wait" loading='lazy'/></Link>
                    <div className="profile">
                        <div>
                            <p><Link>pofile</Link></p>
                            <p><Link to={'/orders'}>orders</Link></p>
                            <p><Link>log out</Link></p>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to={'/cart'}><img src={assets.cart_icon} alt="please wait" loading='lazy'/>
                        <p className="count">0</p>
                    </Link>
                </li>
                <li>
                    <div className="bars" onClick={()=> setVisible(true)}>
                        <img src={assets.menu_icon} alt="please wait" loading='lazy' />
                    </div>
                </li>
            </ul>
            <div className={`parentBar ${visiable ? 'w-full' : 'w-0'}`}>
                <div className='sideBar' onClick={()=> setVisible(false)}>
                    <div className="back">
                        <img src={assets.dropdown_icon} alt="please wait" loading='lazy' />
                        <p>back</p>
                    </div>
                    <ul>
                        <li><Link to={'/'} className='ac'>home</Link></li>
                        <li><Link to={'/collection'}>collection</Link></li>
                        <li><Link to={'/about'}>about</Link></li>
                        <li><Link to={'/contact'}>contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header
