import React from 'react'
import './pagesStyles/contactPage.css'
import CommonTittle from '../components/commonTittle/CommonTittle'
import { assets } from '../assets/frontend_assets/assets'



const Contact = () => {
    return (
        <div className='contact'>
            <CommonTittle word1={'contact'} word2={'us'} showP={false}/>
            <div className="conLanding">
                <div className="image">
                    <img src={assets.contact_img} alt="check connection" loading='lazy'/>
                </div>
                <div className="info">
                    <h1>our store</h1>
                    <div className="site">
                        <p>54709 Willms Station</p>
                        <p>Suite 350, Washington, USA</p>
                    </div>
                    <div className="tele">
                        <p>Tel: (415) 555-0132</p>
                        <p>Email: admin@forever.com</p>
                    </div>
                    <h2>Careers at Forever</h2>
                    <p className="learnMore">Learn more about our teams and job openings.</p>
                    <button>explore jobs</button>
                </div>
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

export default Contact
