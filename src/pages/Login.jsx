import React from 'react'
import {Link} from "react-router-dom";
import { useState } from 'react';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    // Usuário fictício para validação
    const fictitiousUser = {
      username: 'rafael',
      password: 'bot223',
    };

    // Validar as credenciais
    if (username === fictitiousUser.username && password === fictitiousUser.password) {
      alert('Login bem-sucedido!');
    } else {
      alert('Credenciais inválidas. Tente novamente.');
      e.preventDefault();
    }
  };

  return (
    <div className='flex justify-center items-center bg-slate-900 w-screen h-screen '>
      <div className='space-y-2'>

        <div className='bg-white w-96 text-center p-4'>
            <h1 className='sm:text-sm md:text-base lg:text-base xl:text-2xl text-black '>Bem vindo</h1>
        </div>

        <div className='bg-white w-96 text-center p-4'>
          <form action="">
            
            <div className='text-start space-y-2 block mb-4'>
              <label className= '' htmlFor="">Usuário</label>
              <input onChange={handleUsernameChange} className= 'text-base block px-4 py-2 w-full focus:outline-none border-2 border-slate-400 rounded-md focus:border-gray-800' type="text" placeholder='Digite seu usuário' />
            </div>

            <div className='text-start space-y-2 block mb-4'>
              <label className= '' htmlFor="">Senha</label>
              <input onChange={handlePasswordChange} className= 'text-base block px-4 py-2 w-full focus:outline-none border-2 border-slate-400 rounded-md focus:border-gray-800' type="password" placeholder='Digite sua senha' />
            </div>

            <div className='flex mb-4'>
              <input className='cursor-pointer' type="checkbox" />
              <label className='mr-4 ml-1' htmlFor="">Gravar usuário?</label>
            </div>

            <div>
              <Link to="/Home">
                <button onClick={handleSubmit}  className='w-full bg-blue-600 px-4 py-2 text-white hover:font-bold hover:bg-blue-800 '>
                  Entrar
                </button>
              </Link>
              <ul className='text-orange-400 hover:font-bold cursor-pointer mt-4' >Esqueceu a senha?</ul>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}


