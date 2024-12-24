import React, { useContext, useEffect, useState } from 'react'
import Header from '../shared/Header'
import LottiAnimation from '../../Animation/LottiAnimation'
import { Link, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'


const MyCraftList = () => {

  const { user, loading } = useContext(AuthContext);
  


  const [myCrafts, setMyCrafts] = useState([])
 

  useEffect(() => {
    if (user)
      // Fetch crafts by user email
      fetch(`http://localhost:5000/craftsbyEmail/${user.email}`)
        .then(res => res.json())
        .then(data => setMyCrafts(data))
  }, [])

  console.log(user)
  console.log(myCrafts)



  return (
    <div>
      <Header></Header>
      <LottiAnimation></LottiAnimation>

      <h2 className=' text-center text-xl my-2'>My Craft List</h2>
      <div className=" lg:card-side bg-[#F5F4F1] rounded-lg shadow-xl py-2 px-2 border">

        {myCrafts.map(myCraft => (
          <div key={myCraft._id}>
            {/* <img className='rounded-lg my-2 border' src={myCraft.image} alt="" /> */}
            <p>Name : {myCraft.itemName} </p>
            <p>Sub Category Name : {myCraft.price} </p>
            <p>Sub Category Name : {myCraft.rating} </p>
            <p>{myCraft.shortDescription}</p>
            <div className='text-right my-3 '>
              <Link to={`/craftItems/${myCraft._id}`} >
                <button type="button" className='btn btn-outline btn-accent '>View Details</button>
              </Link>
            </div>
          </div>)
        )}
        
      </div>
    </div>
  )
}

export default MyCraftList