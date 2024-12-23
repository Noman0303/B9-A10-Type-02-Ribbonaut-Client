import React, { useState } from 'react'
import Header from '../shared/Header'
import { Link, useLoaderData } from 'react-router-dom'

const AllCraftItems = () => {

  const loadedCrafts = useLoaderData();
  const [crafts, setCrafts] = useState(loadedCrafts)


  return (
    <div className='p-2 rounded-xl'>
      <Header></Header>

      <h2 className='border bg-orange-100 my-2 rounded-xl text-xl text-center'>Total Craft Items: {crafts.length}</h2>
      <div className="overflow-x-auto border-2 my-4 rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='font-semibold text-lg'>
              <th>Item Name</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              crafts.map(craft =>
                <tr key={craft._id}>
                  <th>{craft.itemName}</th>
                  <td>{craft.subcategoryName}</td>
                  <td>{craft.price}</td>
                  <td>{craft.stockStatus}</td>
                  <td>
                    <Link to={`/craftItems/${craft._id}`} >
                      <button type="button" className='btn btn-outline btn-accent '>View Details</button>
                    </Link>
                  </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default AllCraftItems