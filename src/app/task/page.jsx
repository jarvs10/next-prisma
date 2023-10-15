'use client'
import FormPage from '@/components/Form'
import { ContextUse } from '@/context/ContextProvider'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const TaskPage = () => {

  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const {email, password} = user;

  const {login} = ContextUse();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter an email and password");

      return;
    } 

    try {
      await login(email, password);
      toast.success("User has successfully logged");

      setTimeout(() => {
        router.push("/citas");
      }, 2000);

    } catch (error) {
      toast.error(error.message);
    }

    setUser({
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <h1 className='text-center text-6xl py-8'>Iniciar Sesion</h1>

      <p className='text-center text-xl'>Si tienes una cuenta, inicia sesion</p>
      
      <FormPage 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </div>
  )
}

export default TaskPage