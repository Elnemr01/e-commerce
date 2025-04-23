import React from 'react'
import './tittle.css'



const CommonTittle = ({word1,word2}) => {
    return (
        <div className='title'>
            <div>
                <span>{word1}</span>
                <span>{word2}</span>
                <span></span>
            </div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the.
            </p>
        </div>
    )
}

export default CommonTittle
