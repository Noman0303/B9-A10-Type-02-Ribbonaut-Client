import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='border-2'>
        <Outlet></Outlet>
    </div>
  )
}

export default Root