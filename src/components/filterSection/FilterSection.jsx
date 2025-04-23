import React, { useContext, useEffect, useState } from 'react'
import './filterSection.css'
import { ShopContext } from '../../context/GlobalVars';




const FilterSection = ({filterName,f1,f2,f3,filter}) => {

    let {catogry,subCatogry,addCatogry,addSubCatogry,removeCatogry,removeSubCatogry}=useContext(ShopContext);
    
    const toggleCatogry = (e)=> {
        if(catogry.includes(e.target.value)) {
            removeCatogry(e.target.value);
        }
        else {
            addCatogry(e.target.value);
        }
    }

    const toggleSubCatogry = (e)=> {
        if(subCatogry.includes(e.target.value)) {
            removeSubCatogry(e.target.value);
        }
        else {
            addSubCatogry(e.target.value);
        }
    }

    return (
        <div className='filter'>
            <h2>{filterName}</h2>
            <div className="checkboxes">
                <div>
                    <input type="checkbox" name={f1} id={f1} onChange={(ev)=> filter ? toggleCatogry(ev) : toggleSubCatogry(ev)} value={f1}/>
                    <label htmlFor={f1}>{f1}</label>
                </div>
                <div>
                    <input type="checkbox" name={f2} id={f2} onChange={(ev)=> filter ? toggleCatogry(ev) : toggleSubCatogry(ev)} value={f2}/>
                    <label htmlFor={f2}>{f2}</label>
                </div>
                <div>
                    <input type="checkbox" name={f3} id={f3} onChange={(ev)=> filter ? toggleCatogry(ev) : toggleSubCatogry(ev)} value={f3}/>
                    <label htmlFor={f3}>{f3}</label>
                </div>
                
                
            </div>
        </div>
    )
}

export default FilterSection
