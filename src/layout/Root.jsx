import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='max-w-6xl lg:m-8 md:m-2'>
        <Outlet></Outlet>
        <h2>This is Root</h2>
    </div>
  )
}

export default Root