import React from 'react'
import Header from '../shared/Header'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'


const AddCraftItems = () => {

  const handleAddCrafts = event => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const newCraftItem = {image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus, userName, userEmail };

    console.log(newCraftItem);

    // send data to the server
    fetch('http://localhost:5000/crafts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCraftItem)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Item Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
  }

  return (
    <div>
      <Header></Header>
      <div className='max-w-7xl mx-auto'>
        <div className='mt-12 mx-2'>
          <NavLink to='/'>Back to home</NavLink>
        </div>
        <div className='text-center lg:px-28 py-16 rounded-md bg-[#F4F3F0]  mt-12 mb-28'>
          <h2 className='text-3xl lg:text-5xl font-normal font-rancho' >Add New Craft Item</h2>
          <p className='my-8 mx-2'>Expand your textile craft collection with our intuitive interface. Input essential details such as item name, short description, price, processing time, stock status, and additional information. Keep your craft shop's offerings fresh and inspiring by introducing new designs and varieties, ensuring your customers always find something new to love.</p>
          <form onSubmit={handleAddCrafts} >
            <div className=' lg:grid lg:grid-cols-2 gap-8 px-2'>

              <div className='form-control w-full'>

                <label className="form-control w-full ">
                  <span className="label label-text">Image</span>
                  <input type="text" name="image" placeholder="Enter Image URL" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Item Name</span>
                  <input type="text" name="itemName" placeholder="Enter Item name" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Subcategory Name</span>
                  <input type="text" name="subcategoryName" placeholder="Enter Subcategory name" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Short Description</span>
                  <input type="text" name="shortDescription" placeholder="Enter Short Descrption" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Price</span>
                  <input type="text" name="price" placeholder="Enter Item Price" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Rating</span>
                  <input type="text" name="rating" placeholder="Enter Item Rating" className="input input-bordered w-full " />
                </label>

              </div>



              <div>

                <label className="form-control w-full ">
                  <span className="label label-text">Customization-Yes/No</span>
                  <input type="text" name="customization" placeholder="Enter item customization option" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Processing Time</span>
                  <input type="text" name="processingTime" placeholder="Enter item Processing time" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">Stock Status - In-Stock/Made-to-order</span>
                  <input type="text" name="stockStatus" placeholder="Enter item Stock Status " className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">User Email</span>
                  <input type="text" name="userEmail" placeholder="Enter user email " className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                  <span className="label label-text">User Name</span>
                  <input type="text" name="userName" placeholder="Enter user name " className="input input-bordered w-full " />
                </label>

              </div>

              <input className='col-span-2 text-center border-black border-2 bg-[#D2B48C] rounded-md py-3 my-4 w-full btn' type="submit" value="Add Item" />

            </div>
          </form>
        </div>
      </div >

    </div >
  )
}

export default AddCraftItems