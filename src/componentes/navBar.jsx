import React from 'react'

export default function NavBarraSup() {
  return (
    <div className='bg-black'>
        <div className='p-4 sm:text-sm md:text-base lg:text-base xl:text-lg'>
            <ul className='text-white flex justify-start items-center cursor-pointer'>
        
            <li className='ml-2 hover:text-green-500 hover:font-semibold'>Home</li>
            <li className='ml-2 hover:text-green-500 hover:font-semibold'>Cartões</li>
            <li className='ml-2 hover:text-green-500 hover:font-semibold'>Crediarios</li>
            <li className='ml-2 hover:text-green-500 hover:font-semibold'>Saldos</li>

            </ul>
        </div>
    </div>
  )
};

