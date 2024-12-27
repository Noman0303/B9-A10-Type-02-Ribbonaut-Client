import React from 'react'
import { Link } from 'react-router-dom'

const CraftItems = ({ craft }) => {

    const { image, itemName, subcategoryName, shortDescription,_id } = craft

    return (
        <div className=" lg:card-side bg-[#F5F4F1] rounded-lg shadow-xl py-2 px-2 border">
            <img className='rounded-lg my-2 border' src={image} alt="" />
            <p>Name : {itemName} </p>
            <p>Sub Category Name : {subcategoryName} </p>
            <p>{shortDescription}</p>
            <div className='text-right my-3 '>
                <Link to = {`/craftItems/${_id}`} >
                    <button type="button" className='btn btn-outline btn-accent '>View Details</button>
                </Link>
            </div>
        </div>
    )
}

export default CraftItems