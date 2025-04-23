import React from 'react'

const PoliceItem = ({image,text1,text2}) => {
    return (
        <div className='item'>
            <div className="image">
                <img src={image} alt="check internet" loading='lazy' />
            </div>
            <h2>{text1}</h2>
            <p>{text2}</p>
        </div>
    )
}

export default PoliceItem
