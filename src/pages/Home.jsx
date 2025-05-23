import React from 'react'
import Hero from '../components/hero/Hero'
import LatestCollection from '../components/latestCollection/LatestCollection'
import BestSellers from '../components/bestSellers/BestSellers'
import Polices from '../components/polices/Polices'

const Home = () => {
    return (
        <div className='home'>
            <Hero/>
            <LatestCollection/>
            <BestSellers/>
            <Polices/>
        </div>
    )
}

export default Home
