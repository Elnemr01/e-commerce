import React from 'react'
import Hero from '../components/hero/Hero'
import LatestCollection from '../components/latestCollection/LatestCollection'
import BestSellers from '../components/bestSellers/BestSellers'
import Polices from '../components/polices/Polices'
import Footer from '../components/footer/Footer'

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <LatestCollection/>
            <BestSellers/>
            <Polices/>
            <Footer/>
        </div>
    )
}

export default Home
