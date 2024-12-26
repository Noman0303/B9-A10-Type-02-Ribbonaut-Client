import React, { useState } from 'react'
import Header from '../shared/Header'
import Banner from './Banner'
import { useLoaderData } from 'react-router-dom'
import CraftItems from './CraftItems'
import Footer from '../shared/Footer'

const Home = () => {

  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts)
  const [visibleCount, setVisibleCount] = useState(6)

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 6)
  }


  return (
    <div className='mx-4'>
      <Header></Header>
      <Banner></Banner>
      {/* craftitem section */}
      <p>Number of total crafts :  {crafts.length}</p>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 '>
        {
          crafts.slice(0, visibleCount).map(craft =>
            <CraftItems
              key={craft._id}
              craft={craft}
              crafts={crafts}
              setCrafts={setCrafts}
            ></CraftItems>
          )
        }
        { 
          visibleCount<crafts.length &&(
            <div className='text-right'>
            <button onClick={handleViewMore} >
              View More...
            </button>
            </div>
          )
        }
      </div>
      <h2>This is Home</h2>
      <Footer></Footer>
    </div>
  )
}

export default Home