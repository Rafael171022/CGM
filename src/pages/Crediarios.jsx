import React from 'react'
import { Link } from 'react-router-dom'
import NavBarraSup from '/src/componentes/navBar'


export default function Crediarios() {
  const HandelerCancelar = () => {
    alert("Operação cancelada")

  }

  return (
    <div className='bg-slate-500 w-screen h-screen'>
      <NavBarraSup />
      <form className='p-4 bg-black' action="">
        <div className=' justify-center items-center space-y-4 '>

          <div className=''>
            <label className='text-white font-semibold text-2xl block' htmlFor="">Nome da conta</label>
            <input className='px-3 py-2 rounded-md w-96 text-3xl ease-in-out focus:outline-none ' type="text" />
          </div>

          <div className=''>
            <label className='text-white font-semibold  text-2xl block' htmlFor="">Valor total do gasto</label>
            <input className='px-3 py-2 rounded-md w-96 text-3xl ease-in-out focus:outline-none' type="text" placeholder='0,00' />
          </div>

          <div className=''>
            <label className='text-white font-semibold  text-2xl block' htmlFor="">Quantidade de parcelas</label>
            <input className='px-3 py-2 rounded-md w-96 text-3xl ease-in-out focus:outline-none ' type="text" />
          </div>

          <div className=''>
            <label className='text-white font-semibold  text-2xl block' htmlFor="">Dia da compra</label>
            <input className='px-3 py-2 rounded-md w-96 text-3xl ease-in-out focus:outline-none ' type="date" />
          </div>

          <div className=''>
            <label className='text-white font-semibold  text-2xl block' htmlFor="">Fim da compra</label>
            <input className='px-3 py-2 rounded-md w-96 text-3xl ease-in-out focus:outline-none ' type="date" />
          </div>
        </div>
        <div className='space-x-2'>
            <button className='bg-green-400 hover:bg-green-500 px-4 py-2 rounded-md text-white font-semibold mt-4' type='submit'>Gravar</button>
            <Link to="/Cartoes-details">
              <button onClick={HandelerCancelar} className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white font-semibold' type='cancel'>Cancelar</button>
            </Link>
          </div>
      </form>
  </div>
  )
}

