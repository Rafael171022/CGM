import React from 'react'
import NavBarraSup from '/src/componentes/navBar'
import { Link } from 'react-router-dom'

export default function Cartoes_details() {
  return (
    <div>
      <NavBarraSup/>
      <div className='p-4'>
        <form action="">
        <Link to="/Cartoes">
          <button className='bg-green-400 rounded-md px-4 py-2 hover:bg-green-600'>
            Add+
          </button>
        </Link>
        </form>
      </div>
    </div>
  )
}

