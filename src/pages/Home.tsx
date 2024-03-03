import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <section className='main'></section>

        <h1>LATEST PRODUCT
        <Link to='/search' className='findmore'>
          MORE
        </Link>
        </h1>
 
    </div>                                                                                    
  )
}

export default Home