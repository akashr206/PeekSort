import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-gray-700 pb-3 text-white items-center w-full flex flex-col md:flex-row justify-around'>
            <div className='text-lg mt-3'>
                <h3>Source : <Link className='text-indigo-400' to={'https://www.geeksforgeeks.org/'}>GFG</Link></h3>

                <h3>Developer : Akash</h3>
            </div>
            <div><h2 className=' p-5 text-xl text-center'>© 2025 PeekSort. All rights reserved</h2></div>
            <div >
                <div className='flex gap-3'>
                    <div><Link to={'https://github.com/akashr206'}><img src="/github.png" className='w-8 h-8' alt="" /></Link></div>
                    <div><Link to={'https://www.linkedin.com/in/akash-r-55496631b/'}><img src="/linkedin.png" className='w-8 h-8' alt="" /></Link></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
