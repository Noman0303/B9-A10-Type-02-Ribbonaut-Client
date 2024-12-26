import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Header from '../shared/Header'
import LottiAnimation from '../../Animation/LottiAnimation'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'


const MyCraftList = () => {
  const { user } = useContext(AuthContext);
  const [myCraftItems, setMyCraftItems] = useState([]);
  const [filteredCraftItems, setFilteredCraftItems] = useState([]);
  const [uniqueCustomization, setUniqueCustomization] = useState([]);
  const [selectedCustomization, setSelectedCustomization] = useState('ALL');



  // Fetch crafts by the logged-in user's email if the user exists

  useEffect(() => {
    if (user?.email) {
      // Fetch crafts by user email
      fetch(`http://localhost:5000/craftsbyEmail/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setMyCraftItems(data);
          setFilteredCraftItems(data);

          // Extract unique customization option. 

          const customization = ['All', ...new Set(data.map((item) => item.customization))]
          setUniqueCustomization(customization);
        })
        .catch(error => console.error('Error fetching Crafts:', error))
    }
  }, [user]);

  // Handle filtering by customization

  const handleCustomizationFilter = (customization) => {
    setSelectedCustomization(customization);
    if (customization === 'All') {
      setFilteredCraftItems(myCraftItems);
    }
    else {
      const filtered = myCraftItems.filter((item) => item.customization === customization)
      setFilteredCraftItems(filtered);
    }
  };


  const handleDelete = (id) => {
    // console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/crafts/${id}`, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Craft has been deleted.",
                  icon: "success",
                });
                // Update state to remove deleted craft
                const remaining = myCraftItems.filter(craft => craft._id !== id)
                setMyCraftItems(remaining);
                setFilteredCraftItems(remaining);
              }
            });
        };
      });
  };


  console.log(user);
  console.log(myCraftItems);



  return (
    <div>
      <Header></Header>
      <LottiAnimation></LottiAnimation>

      <h2 className=' text-center text-xl my-2'>My Craft List</h2>

      {/* Filter Section */}

      <div className="mb-4 text-center">
        <label className="font-semibold mr-2">Filter by Customization:</label>
        <select
          className="border-2 rounded "
          value={selectedCustomization}
          onChange={(e) => handleCustomizationFilter(e.target.value)}
        >
          {uniqueCustomization.map((customization) => (
            <option key={customization} value={customization}>
              {customization}
            </option>
          ))}
        </select>
      </div>



      {/* Craft Items */}
      <div className="  bg-[#F5F4F1] rounded-lg shadow-xl py-2 px-2 border grid md:grid-cols-2 lg:grid-cols-3 gap-4  ">

        {filteredCraftItems.map((myCraft) => (
          <div key={myCraft._id} className='border border-blue-200 rounded-xl p-2'>
            <img className='rounded-lg my-2' src={myCraft.image} alt={myCraft.itemName} />
            <p>Name : {myCraft.itemName} </p>
            <p>Price : {myCraft.price} </p>
            <p>Rating : {myCraft.rating} </p>
            <p>Cuztomisation : {myCraft.customization}</p>
            <p>Stock status : {myCraft.stockStatus}</p>
            <div className='flex justify-start gap-2 my-3 '>
              <Link to={`/updatePage/${myCraft._id}`} >
                <button type="button" className='btn btn-outline btn-accent '>Update</button>
              </Link>

              <button type="button" className='btn btn-outline btn-accent' onClick={() => handleDelete(myCraft._id)}>Delete</button>
            </div>
          </div>)
        )}
      </div>
    </div>
  );
}



export default MyCraftList