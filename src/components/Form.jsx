import Link from 'next/link'
import React from 'react'

const FormPage = ({user, handleChange, handleSubmit}) => {

  const {email, password} = user;

  return (
    <form onSubmit={handleSubmit} className='mt-8 w-[60%] mx-auto'>
      <div className='mb-4'>
        <label className='block mb-2 text-lg' htmlFor="email">Email</label>
        <input onChange={handleChange} value={email} name='email' id='email' className='w-full py-2 outline-none px-2 rounded-md text-black' type="email" placeholder='Email' />
      </div>

      <div className='mb-8'>
        <label className='block mb-2 text-lg' htmlFor="password">Password</label>
        <input onChange={handleChange} value={password} name='password' id='password' className='w-full py-2 outline-none px-2 rounded-md text-black' type="password" placeholder='Password' />
      </div>

      <input type="submit" value="Iniciar Sesion" className='py-3 bg-indigo-600 hover:bg-indigo-800 text-white font-bold w-full rounded-md cursor-pointer text-lg' />

      <div className='mt-6 text-xl'>
        <Link className=' hover:underline hover:underline-offset-8 hover:decoration-4 hover:decoration-red-600' href={'/register'}>Crear una Cuenta</Link>
      </div>
    </form>
  )
}

export default FormPage