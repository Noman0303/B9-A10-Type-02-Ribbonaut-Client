import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const SubCategoryItems = () => {

    const { subCategoryName } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);



    // Fetch crafts by the logged-in user's email if the user exists

    useEffect(() => {

        // Fetch items based on Subcategory
        fetch(`https://ribbonaut-server.vercel.app/crafts?subCategory=${subCategoryName}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setLoading(false);

            })
            .catch(error => {
                console.error('Error fetching  subcategory items:', error)
                setLoading(false);
            })
    }, [subCategoryName]);

    console.log(subCategoryName);
    console.log(items);

    return (
        <div>
            <Header></Header>
            <h2 className=' text-center text-xl my-2 bg-orange-100 rounded-full p-2 border-2'>Sub Category Name : <span className='font-semibold'> {subCategoryName} </span></h2>
            <h2 className=' text-center text-xl my-2'>Number of available Items : {items.length} </h2>

            <div className="mx-auto my-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                {
                    items.map(item =>

                        <div className=" lg:card-side bg-[#F5F4F1] rounded-lg shadow-xl py-2 px-2 border gap-2 "
                            key={item.id}
                            item={item}>
                            <img className='rounded-lg my-2 border' src={item.image} alt="" />
                            <p> <span className='font-semibold'>Item Name : </span>{item.itemName} </p>
                            <p><span className='font-semibold'>Sub Category Name : </span>{item.subcategoryName}</p>
                            <p><span className='font-semibold'>Short Description : </span>{item.shortDescription}</p>
                            <p><span className='font-semibold'>Price : </span>{item.price}</p>
                            <p><span className='font-semibold'>Rating : </span>{item.rating}</p>
                            <p><span className='font-semibold'>Processing Time : </span>{item.processingTime}</p>
                            <div className='text-right my-3 '>
                                <Link to={`/craftItems/${item._id}`} >
                                    <button type="button" className='btn btn-outline btn-accent '>View Details</button>
                                </Link>
                            </div>
                        </div>


                    )
                }
            </div>


            <Footer></Footer>
        </div>
    );
}




export default SubCategoryItems

