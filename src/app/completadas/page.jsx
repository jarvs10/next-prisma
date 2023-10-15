'use client'
import Complete from '@/components/Complete';
import Navbar from '@/components/ui/Navbar';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';
import useSWR from 'swr';

const CitasCompletadas = () => {

  const router = useRouter();

  const fetcher = async () => {
    const datos = await axios.get('http://localhost:3000/api/completadas');

    return datos.data
  }

  const { data, error, isLoading } = useSWR('http://localhost:3000/api/completadas', fetcher, { refreshInterval: 100 });

  const handleDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:3000/api/agendas/${id}`);

      toast.success('deleted successfully');

      // setTimeout(() => {
      //   location.reload();
      // }, 2000);

    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <Navbar />

      <div className='flex justify-between mt-16'>
        <h2 className='text-2xl'>Citas Completadas</h2>

        <div className='flex gap-3'>
          <button onClick={() => router.push('/citas')} className="py-2 bg-sky-600 hover:bg-sky-800 px-6 rounded-md font-bold text-lg">
            Mis Citas
          </button>
        </div>

      </div>

      {
        data?.map(citas => {
          return (
            <Complete
              key={citas.id}
              citas={citas}
              handleDelete={handleDelete}
            />
          )
        })
      }

    </div>
  )
}

export default CitasCompletadas