import React from 'react'
import "./polices.css"
import { assets } from '../../assets/frontend_assets/assets'
import PoliceItem from './PoliceItem'

const Polices = () => {

    function handleSubmit (event) {
        event.preventDefault();
    }
    return (
        <div className='policy'>
            <div className="part1">
                <PoliceItem image={assets.exchange_icon} text1={"easy exchange policy"} text2={"We offer hassle free exchange policy"}/>
                <PoliceItem image={assets.quality_icon} text1={"7 Days Return Policy"} text2={"We provide 7 days free return policy"}/>
                <PoliceItem image={assets.support_img} text1={"Best customer support"} text2={"we provide 24/7 customer support"}/>
            </div>
            <div className="part2">
                <h2>Subscribe now & get 20% off</h2>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <form className="subscribe" onSubmit={(e)=> handleSubmit(e)}>
                    <input type="email" name="main" placeholder='Enter your email' required/>
                    <button type='submit'>subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default Polices
