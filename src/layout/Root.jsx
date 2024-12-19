import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='border-2'>
        <Outlet></Outlet>
        <h2>This is Root</h2>
    </div>
  )
}

export default Root