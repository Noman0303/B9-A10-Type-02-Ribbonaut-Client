import React from 'react'
import { Link } from 'react-router-dom'

const CraftItems = ({ craft }) => {

    const { image, itemName, subcategoryName, shortDescription, _id } = craft

    return (
        <div className=" lg:card-side  rounded-lg shadow-xl  bg-[#F5F4F1]  py-2 px-2 border
        transition-all duration-300 ease-in-out transform hover:scale-105 dark:bg-gray-800 dark:text-white ">
            <img className='rounded-lg my-2 border' src={image} alt="" />
            <p>Name : {itemName} </p>
            <p>Sub Category Name : {subcategoryName} </p>
            <p>{shortDescription}</p>
            <div className='text-right my-3 '>
                <Link to={`/craftItems/${_id}`} >
                    <button type="button" className='btn btn-outline btn-accent '>View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default CraftItems