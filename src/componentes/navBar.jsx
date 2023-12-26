import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarraSup() {
  return (
    <div className='bg-black'>
        <div className='p-4 sm:text-sm md:text-base lg:text-base xl:text-lg'>
            <ul className='text-white flex justify-start items-center cursor-pointer'>
            <Link to="">
              <li className='ml-2 hover:text-green-500 hover:font-semibold'>Home</li>
            </Link>

            <Link to="">
              <li className='ml-2 hover:text-green-500 hover:font-semibold'>Cartões</li>
            </Link>
           
           <Link to="">
              <li className='ml-2 hover:text-green-500 hover:font-semibold'>Crediarios</li>
           </Link>
            
            <Link to="">
              <li className='ml-2 hover:text-green-500 hover:font-semibold'>Saldos</li>
            </Link>
            </ul>
        </div>
    </div>
  )
};

