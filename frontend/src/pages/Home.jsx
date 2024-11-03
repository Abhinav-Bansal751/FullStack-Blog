import React from 'react'
import HomePosts from '../components/HomePosts'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className='mt-4 '>
      
        <HomePosts />
        <HomePosts />
        <HomePosts />
    </div>
    {/* <Footer /> */}
    </>
  )
}

export default Home