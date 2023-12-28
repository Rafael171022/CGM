import React from 'react'
import NavBarraSup from '/src/componentes/navBar'
import { Link } from 'react-router-dom'


export default function Cartoes() {
  return (
    <div className='bg-slate-500 w-screen h-screen'>
    <NavBarraSup />
      <form className='items-center justify-center p-4 mt-4' action="">
        <div className='space-y-2'>
          <label className='text-white font-light text-2xl' htmlFor="">Nome da conta</label>
          <input className='px-3 py-2 rounded-md w-full text-3xl' type="text" />
          <label className='text-white font-light text-2xl' htmlFor="">Valor da conta</label>
          <input className='px-3 py-2 rounded-md w-full text-3xl' type="text" />
          <label className='text-white font-light text-2xl' htmlFor="">Quantidade de parcelas</label>
          <input className='px-3 py-2 rounded-md w-full text-3xl' type="text" />
          <label className='text-white font-light text-2xl' htmlFor="">Dia da compra</label>
          <input className='px-3 py-2 rounded-md w-full text-3xl' type="date" />
        </div>
      </form>
  </div>
  )
}


