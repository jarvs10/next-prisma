'use client'
import FormRegister from '@/components/register/FormRegister'
import { ContextUse } from '@/context/ContextProvider';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

const RegisterPage = () => {

  const router = useRouter();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const {name, email, password} = user;

  const {register} = ContextUse();

  const handleChange = ({target: {name, value}}) => {
    setUser({...user, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please enter a name, email and password");

      return;
    } 

    try {
      await register(email, password);
      toast.success("Datos Agregados");

      setTimeout(() => {
        router.push("/task");
      }, 3000);

    } catch (error) {
      toast.error(error.message);
    }

    setUser({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <div>
      <h1 className='text-center text-6xl py-8'>Crea una cuenta</h1>

      <p className='text-center text-xl'>Crea una cuenta en AppJarvs</p>

      <FormRegister 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
    </div>
  )
}

export default RegisterPage