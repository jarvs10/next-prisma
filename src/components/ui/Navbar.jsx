'use client'
import { ContextUse } from '@/context/ContextProvider'
import Link from 'next/link';
import React from 'react'

const Navbar = () => {

  const {user, logout} = ContextUse();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <nav className='flex justify-between items-center'>
      <h1 className='text-5xl font-black'>AppBarber</h1>

      <div className='flex items-center gap-4'>
        <p className=''>Hola: </p>
        <Link onClick={handleLogout} href={'/task'} passHref className='py-2 bg-red-600 hover:bg-red-800 px-2 rounded-md font-bold'>{user?.email}</Link>
      </div>
      
    </nav>
  )
}

export default Navbar