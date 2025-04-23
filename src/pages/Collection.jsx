import React, { useContext, useEffect, useState } from 'react'
import FilterSection from '../components/filterSection/FilterSection'
import CommonTittle from '../components/commonTittle/CommonTittle'
import { ShopContext } from '../context/GlobalVars'
import { Link } from 'react-router'
import Product from '../components/product/Product'
import Footer from '../components/footer/Footer'
import { assets } from '../assets/frontend_assets/assets'

const Collection = () => {
    const [myProducts,setProducts]=useState([]);
    const [showFiter,setShowFilter]=useState(false);
    const [sortType,setSortType]=useState('');
    const {products,catogry,subCatogry}=useContext(ShopContext);

    useEffect(()=> {
        setProducts(products);
    },[])

    useEffect(()=> {
        handleFilter();
    },[catogry,subCatogry]);

    useEffect(()=> {
        handleSelectForSorting();
    },[sortType])


    // handle select option function
    const handleSelectForSorting=()=> {
        const sortedProducts=myProducts.slice();

        switch (sortType) {
            case 'low-high':
                setProducts(sortedProducts.sort((a,b)=> a.price-b.price));
            break;

            case 'high-low':
                // setProducts(sortedProducts.sort((a,b)=> b.price-a.price));
                setProducts(sortedProducts.sort((a,b)=> b.price-a.price));
            break;
        
            default:
                handleFilter();
                break;
        }
        
    }

    // handle filter function

    const handleFilter =()=> {
        if(catogry.length!==0 || subCatogry.length!==0) {
            setProducts(
                products.filter((ele)=> {
                    if(catogry.length!==0 && subCatogry.length!==0) {
                        return catogry.includes(ele.category.toLowerCase()) && subCatogry.includes(ele.subCategory.toLowerCase())
                    }
                    else if (catogry.length===0) {
                        return subCatogry.includes(ele.subCategory.toLowerCase())
                    }
                    else if (subCatogry.length===0) {
                        return catogry.includes(ele.category.toLowerCase())
                    }
                    else return false;
            }))
        }
        else {
            setProducts(products);
        }
    }


    return (
        <div className='collectionPage'>
            <div className="collectionSection">
                <div className="filters">
                    <h1 onClick={()=> setShowFilter(!showFiter)}>filters
                        <img src={assets.dropdown_icon} alt="please wait" loading='lazy' className={`rotate-${showFiter ? '90' : '0'}`}/>
                    </h1>
                    <div className={`${showFiter ? "":'hidden'} sm:block`}>
                        <FilterSection filterName={"catogries"} f1={"men"} f2={"women"} f3={'kids'} filter={true}/>
                        <FilterSection filterName={"type"} f1={"topwear"} f2={"bottomwear"} f3={'winterwear'} filter={false}/>
                    </div>
                </div>
                <div className="collections">
                    <div className="heading">
                        <CommonTittle word1={'all'} word2={'collections'}/>
                        <select name="select" id="select" onChange={(e)=> setSortType(e.target.value)}>
                            <option value="relavent">sorted by: Relavent</option>
                            <option value="low-high">sorted by: low to high</option>
                            <option value="high-low">sorted by: high to low</option>
                        </select>
                    </div>
                    <div className="products">
                        {
                            myProducts.map((e)=> {
                                return <Link to={`/product/${e._id}`} key={e._id}><Product product={e}/></Link>
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Collection