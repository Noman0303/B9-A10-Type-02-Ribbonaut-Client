import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Slide } from "react-awesome-reveal";



const CraftCategories = () => {

    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        // Fetch subCategories
        fetch('subCategories.json')
            .then(res => res.json())
            .then(data => setSubCategories(data))
    }, []);
    console.log(subCategories);


    return (
        <div className="mt-24">
            <Slide
            direction="left"
            duration={2000}>
            <h2 className="font-semibold text-2xl text-center bg-slate-200 p-2 rounded-full">Total Sub Categories : {subCategories.length} </h2>
            </Slide>
            
            <div className="mx-auto mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {
                    subCategories.map(subcategory =>
                        <Link to={`/subCategoryItems/${subcategory.name}`}>
                        <div className=" lg:card-side bg-[#F5F4F1] rounded-lg shadow-xl py-2 px-2 border gap-2 transition-all duration-300 ease-in-out transform hover:scale-105"
                            key={subcategory.id}
                            subcategory={subcategory}>
                            <img className='rounded-lg my-2 border' src={subcategory.image} alt="" />
                            <p> <span className='font-semibold'>Sub Category Name : </span>{subcategory.name} </p>
                            <p><span className='font-semibold'>Sub Category Description : </span>{subcategory.short_description}</p>
                            <p><span className='font-semibold'>Design Type : </span>{subcategory.types}</p>
                            <p><span className='font-semibold'>Item Materials : </span>{subcategory.materials}</p>
                            <p><span className='font-semibold'>Production technique : </span>{subcategory.techniques}</p>
                        </div>
                        </Link>
                    )
                }
            </div>
            
        </div>
    )
}

export default CraftCategories