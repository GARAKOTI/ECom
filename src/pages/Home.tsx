import React from 'react'
import { Link } from 'react-router-dom'
import ProductCart from '../components/product-cart'

const Home = () => {

  const addToCartHandler =()=>{};
  return (
    <div className='home'>
      <section className='main'></section>

        <h1>LATEST PRODUCT
        <Link to='/search' className='findmore'>
          MORE
        </Link>
        </h1>
        <main>
          <ProductCart productId='adaaaddd' name='Mackbook' price={122333} stock={2300} handler={addToCartHandler} photo='https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg'/>
        </main>
 
    </div>                                                                                    
  )
}

export default Home