import React from 'react'
import './pagesStyles/aboutPage.css'
import CommonTittle from '../components/commonTittle/CommonTittle'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
    return (
        <div className='aboutPage'>
            <CommonTittle word1={'about'} word2={'us'}/>
            <div className="aboutLanding">
                <div className="image">
                    <img src={assets.about_img} alt="chect Connection" loading='lazy'/>
                </div>
                <div className="text">
                    <p>
                        Forever was born out of a passion for innovation and a desire to
                        revolutionize the way people shop online. Our journey began with a
                        simple idea: to provide a platform where customers can easily discover,
                        explore, and purchase a wide range of products from the comfort of their
                        homes.
                    </p>
                    <p>
                        Since our inception, we've worked tirelessly to curate a diverse
                        selection of high-quality products that cater to every taste and
                        preference. From fashion and beauty to electronics and home essentials,
                        we offer an extensive collection sourced from trusted brands and suppliers.
                    </p>
                    <h1>our mission</h1>
                    <p>
                        Our mission at Forever is to empower customers with choice,
                        convenience, and confidence. We're dedicated to providing a seamless
                        shopping experience that exceeds expectations, from browsing and
                        ordering to delivery and beyond.
                    </p>
                </div>
            </div>
            <CommonTittle word1={'why'} word2={'choose us'}/>
            <div className="reasons">
                <div className="reason">
                    <h2>Quality Assurance:</h2>
                    <p>
                        We meticulously select and vet each product to ensure it meets our
                        stringent quality standards.
                    </p>
                </div>

                <div className="reason">
                    <h2>Convenience:</h2>
                    <p>
                        With our user-friendly interface and hassle-free ordering process,
                        shopping has never been easier.
                    </p>
                </div>

                <div className="reason">
                    <h2>Exceptional Customer Service:</h2>
                    <p>
                        Our team of dedicated professionals is here to assist you the way,
                        ensuring your satisfaction is our top priority.
                    </p>
                </div>
            </div>
            <div className="aboutPart2">
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

export default About
