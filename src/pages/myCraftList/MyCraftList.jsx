import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Header from '../shared/Header'
import LottiAnimation from '../../Animation/LottiAnimation'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'


const MyCraftList = () => {

  const { user, loading } = useContext(AuthContext);
  const [myCrafts, setMyCrafts] = useState([]);

  useEffect(() => {
    if (user)
      // Fetch crafts by user email
      
      fetch(`http://localhost:5000/craftsbyEmail/${user.email}`)
        .then(res => res.json())
        .then(data => setMyCrafts(data))
        .catch(error => console.error('Error fetching Crafts:', error))
  }, [user])

  const handleDelete = _id => {
    console.log(_id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })

    fetch(`http://localhost:5000/crafts/${_id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Craft has been deleted.",
            icon: "success"
          });
          const remaining = myCrafts.filter(craft => craft._id !== _id)
          setMyCrafts(remaining);
        }
      })
  }


console.log(user)
console.log(myCrafts)



return (
  <div>
    <Header></Header>
    <LottiAnimation></LottiAnimation>

    <h2 className=' text-center text-xl my-2'>My Craft List</h2>
    <div className="  bg-[#F5F4F1] rounded-lg shadow-xl py-2 px-2 border grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">

      {myCrafts.map((myCraft) => (
        <div key={myCraft._id} className='border border-blue-200 rounded-xl p-2'>
          <img className='rounded-lg my-2' src={myCraft.image} alt={myCraft.itemName} />
          <p>Name : {myCraft.itemName} </p>
          <p>Price : {myCraft.price} </p>
          <p>Rating : {myCraft.rating} </p>
          <p>Cuztomisation : {myCraft.customization}</p>
          <p>Stock status : {myCraft.stockStatus}</p>
          <div className='flex justify-start gap-2 my-3 '>
            <Link to={`/craftItems/${myCraft._id}`} >
              <button type="button" className='btn btn-outline btn-accent '>Update</button>
            </Link>
            <button type="button" className='btn btn-outline btn-accent' onClick={() => handleDelete(myCraft._id)}>Delete</button>
          </div>
        </div>)
      )}
    </div>
  </div>
)
}

export default MyCraftList