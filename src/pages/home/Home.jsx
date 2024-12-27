import React, { useCallback, useEffect, useState } from 'react'
import Header from '../shared/Header'
import Banner from './Banner'
import { useLoaderData } from 'react-router-dom'
import CraftItems from './CraftItems'
import Footer from '../shared/Footer'
import CraftCategories from './CraftCategories'

const Home = () => {

  // Load initial crafts data
  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts);
  const [visibleCount, setVisibleCount] = useState(6);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');



  // handle view more button click
  const handleViewMore = useCallback(() => {
    setVisibleCount(prevCount => prevCount + 6);
  }, [])

  // Toggle theme between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Dark/Light Theme Handling
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);


  return (
    <div className="mx-4">
      <Header></Header>
      <Banner></Banner>

      <div className='p-2 text-right'>
        <button onClick={toggleTheme}
          className=" bg-gray-300 rounded-full shadow-md hover:bg-gray-400">
          <label className="flex cursor-pointer gap-2">
            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
          </label>
        </button>
      </div>

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

export default Homegit 