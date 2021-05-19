import React from 'react'
import CarouselComponent from '../components/Carousel'
import HighLigths from '../components/HighLigths'
import Category from '../components/Category'
import OutStanding from '../components/OutStanding'
import Brands from '../components/Brands'

const Home = () => {
    return (
        <div>
          <CarouselComponent />
          <HighLigths />
          <Category />
          <OutStanding />
          <Brands />
        </div>
    )
}

export default Home
