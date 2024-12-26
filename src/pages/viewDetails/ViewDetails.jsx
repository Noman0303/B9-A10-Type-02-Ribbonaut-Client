import React from 'react'
import Header from '../shared/Header'
import { useLoaderData } from 'react-router-dom'

const ViewDetails = () => {

    const craft = useLoaderData();
    const { image, itemName, subcategoryName, shortDescription, price, rating, customization, processingTime, stockStatus } = craft;
    console.log(craft)

    return (
        <div className='p-2'>
            <Header></Header>
            <img src={image} alt="" className='rounded-xl my-4' />
            <div className='mt-4 border-2 rounded-xl bg-slate-100 p-2' >
                <p> <span className='font-semibold text-lg'>Item Name : </span>{itemName}</p>
                <p> <span className='font-semibold text-lg'>Description : </span>{shortDescription}</p>
            </div>

            <div className='mt-4 border-2 rounded-xl bg-slate-100 gap-2 p-2'>
                <p> <span className='font-semibold'>Sub Category Name : </span>{subcategoryName}</p>
                <p> <span className='font-semibold'>Price : </span>${price}</p>
                <p> <span className='font-semibold'>Rating : </span>{rating}</p>
                <p> <span className='font-semibold'>Customization : </span>{customization}</p>
                <p> <span className='font-semibold'>Processing Time : </span>{processingTime}</p>
                <p> <span className='font-semibold'>Stock Availability : </span>{stockStatus}</p>
            </div>
        </div>
    )
}

export default ViewDetails;