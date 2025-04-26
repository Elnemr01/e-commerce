import React, { use, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router';
import './pagesStyles/productPage.css'
import { ShopContext } from '../context/GlobalVars';
import CommonTittle from '../components/commonTittle/CommonTittle';
import Product from '../components/product/Product';
import { assets } from '../assets/frontend_assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../reduxToolKit/cartSlice';

const ProductPage = () => {
    let [productData,setProductData]=useState({});
    let [relatedProducts,setRelatedProducts]=useState([]);
    let [image,setImage]=useState('');
    let [size,setSize]=useState('');
    let {products,currency}=useContext(ShopContext);
    let {id}=useParams();
    let dispatch=useDispatch();

    useEffect(()=> {
        getTheProduct();
    },[productData,id]);


    // fetch to get the product
    const getTheProduct=async ()=> {
        let tempProducts=products.map((item)=> {
            if(item._id===id) {
                setProductData(item);
                setImage(item.image[0]);
                return null;
            }
        })
        setRelatedProducts(products.filter((item)=> item.category===productData.category));
    }

    const addProductToCart=(pro)=> {
        if(size!=='') {
            if(productData.pieceNum) {
                dispatch(addProduct({
                    ...pro,
                    chociedSize: size,
                    pieceNum:1,
                }));
            }
            else {
                dispatch(addProduct({
                    ...pro,
                    chociedSize: size,
                    pieceNum: productData.pieceNum+1,
                }));
            }
        }
    }
    
    return image ? (
        <div className='productPage'>
            <div className="details">
                <div className="photos">
                    <ul>
                        {productData.image.map((src,i)=> {
                            return <li key={i}><img src={src} alt="check connection" loading='lazy' onClick={(ev)=> setImage(ev.target.src)}/></li>
                        })}
                    </ul>
                    <div className="shownImage">
                        <img src={image} alt="check connection" loading='lazy'/>
                    </div>
                </div>
                <div className="info">
                    <h2 className="name">{productData.name}</h2>
                    <div className="grade">
                    <img src={assets.star_icon} alt="check connection" loading='lazy'/>
                    <img src={assets.star_icon} alt="check connection" loading='lazy'/>
                    <img src={assets.star_icon} alt="check connection" loading='lazy'/>
                    <img src={assets.star_icon} alt="check connection" loading='lazy'/>
                    <img src={assets.star_dull_icon} alt="check connection" loading='lazy'/>
                    <p>(122)</p>
                    </div>
                    <p className="price">{currency}{productData.price}</p>
                    <p className="description">{productData.description}</p>
                    <div className="sizes">
                        <h3>select size</h3>
                        <ul>
                            {productData.sizes.map((e,i)=> <li key={i} className={`${size===e? 'choiced':''}`}><button onClick={()=> setSize(e)}>{e}</button></li>)}
                        </ul>
                    </div>
                    <button onClick={()=> addProductToCart(productData)}>add to cart</button>
                    <div className="goodInfo">
                        <p>100% Original product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            <div className="text">
                <span>description</span>
                <span>review(122)</span>
                <div className="para2">
                    <p>
                        An e-commerce website is an online platform that facilitates the buying and selling of
                        products or services over the internet. It serves as a virtual marketplace where businesses
                        and individuals can showcase their products, interact with customers, and conduct
                        transactions without the need for a physical presence. E-commerce websites have
                        gained immense popularity due to their convenience, accessibility, and the global reach
                        they offer.
                    </p>
                    <p>
                        E-commerce websites typically display products or services along with detailed descriptions,
                        images, prices, and any available variations (e.g., sizes, colors). Each product usually has
                        its own dedicated page with relevant information.
                    </p>
                </div>
            </div>
            <CommonTittle word1={'related'} word2={'products'} showP={false}/>
            <div className="relataedProducts">
                {
                    relatedProducts.slice(0,5).map((e)=> <Link to={`/product/${e._id}`} key={e._id}
                    onClick={()=> scrollTo({left:0,top:0,behavior:"smooth"})}><Product product={e}/></Link>)
                }
            </div>
        </div>
    ) : <div></div>
}

export default ProductPage
