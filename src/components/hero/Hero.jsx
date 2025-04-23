import React from 'react'
import './hero.css'
import { assets } from '../../assets/frontend_assets/assets'

const Hero = () => {
    return (
        <div className='landing'>
                <div className="text">
                    <div>
                        <div className="part p1">
                            <p></p>
                            <p>our bestsellers</p>
                        </div>
                        <h2>latest arrivals</h2>
                        <div className="part p2">
                            <p>shop now</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={assets.about_img} alt="check intenet" loading='lazy'/>
            </div>
        </div>
    )
}

export default Hero
