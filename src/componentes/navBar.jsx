import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBarraSup() {
  return (
    <nav className='bg-white border-y-2 shadow p-4 sm:text-sm md:text-base lg:text-base xl:text-lg'> 
      <div className='flex items-center justify-start'>
      <img className='sm:w-16 md:w-16 lg:w-16' src="./src/assets/logotipo/gmc.png" alt="" />
        <ul className='text-black flex cursor-pointer '>  
            <Link to="/Home"><li className='ml-2 hover:text-green-500 hover:font-semibold'>Home</li></Link>
            <Link to="/Cartoes-details"><li className='ml-2 hover:text-green-500 hover:font-semibold'>Cartões</li></Link>
            <Link to="/Crediarios-details"><li className='ml-2 hover:text-green-500 hover:font-semibold'>Crediarios</li></Link>
            <Link to="/Saldo-details"><li className='ml-2 hover:text-green-500 hover:font-semibold'>Saldos</li></Link>  
         </ul>  
      </div>
    </nav>
  )
};

