import React, { useState } from 'react'
import Header from '../shared/Header'
import Banner from './Banner'
import { useLoaderData } from 'react-router-dom'
import CraftItems from './CraftItems'
import Footer from '../shared/Footer'
import CraftCategories from './CraftCategories'

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
      <h2 className=' text-center font-semibold text-2xl my-2 bg-orange-100 rounded-full p-2 border-2' >Number of total crafts :  {crafts.length}</h2>
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
          visibleCount < crafts.length && (
            <div className='text-right'>
              <button onClick={handleViewMore} >
                View More...
              </button>
            </div>
          )
        }
      </div>

      {/* art & craft category section */}
      <div className='my-10'>
        <CraftCategories></CraftCategories>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default Home