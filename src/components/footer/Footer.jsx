import React from 'react'
import "./footer.css"
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
    return (
        <footer>
            <div className="firstPart">
                <div className="information">
                    <div className="image">
                        <img src={assets.logo} alt="check connectoin" loading='lazy' />
                    </div>
                    <p className="text">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                    </p>
                </div>
                <div className="company">
                    <h2>company</h2>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>private policy</li>
                    </ul>
                </div>
                <div className="contact">
                    <h2>get in touch</h2>
                    <p>+1-000-000-0000</p>
                    <p>elnemr21092003@gmail.com</p>
                    <p>Instagram</p>
                </div>
            </div>
            <div className="copyRigth">
                Copyright 2024@ greatstack.dev - All Right Reserved.
            </div>
        </footer>
    )
}

export default Footer
