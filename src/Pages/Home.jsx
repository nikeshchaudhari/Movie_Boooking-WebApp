import React from 'react'
import Navbar from '../components/Navbar'
import MovieSlider from '../components/MovieSlider'
import Onshowing from '../components/OnShowing'
import MovieTrailer from '../components/MovieTrailer'

const Home = () => {
  return (
    <>
    
      <Navbar/>
      <MovieSlider/>
  <Onshowing/>
  {/* <MovieTrailer/>   */}
    
    </>
  )
}

export default Home