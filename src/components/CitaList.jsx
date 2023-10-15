import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const CitaList = ({ citad }) => {

  const router = useRouter();

  const { id, cita, fecha, hora } = citad;

  const citaCompleted = async (citad) => {

    try {
      await axios.put(`http://localhost:3000/api/completadas/${citad.id}`, citad);

      toast.success('cita completed successfully');

      setTimeout(() => {
        location.reload();
      }, 2000);

    } catch (error) {

      console.log(error.message);
    }
  }

  return (

    <div className='mb-4 bg-slate-100 shadow-md rounded-md py-4 px-4 flex justify-between items-center'>
      <div>
        <p className='text-slate-700 font-normal'>Cliente: <span className='font-bold text-lg text-sky-800'>{cita}</span></p>
        <p className='text-slate-700 font-normal'>Fecha: <span className='font-bold text-lg text-sky-800'>{fecha}</span></p>
        <p className='text-slate-700 font-normal'>Horario: <span className='font-bold text-lg text-sky-800'>{hora}</span></p>

        <div className='mt-4 flex gap-3'>
          <button onClick={() => router.push(`/newcita/editar/${id}`)} className='bg-sky-600 text-white font-bold py-2 px-6 hover:bg-sky-800 rounded-md'>Editar Cita 🖋</button>
          <button onClick={() => citaCompleted(citad)} className='bg-lime-600 text-white font-bold py-2 px-6 hover:bg-lime-800 rounded-md'>Cita Completada ✔</button>
        </div>
      </div>
      <div>
        <Image src={'/img/corte-de-pelo.png'} width={100} height={100} alt='icono' />
      </div>
    </div>
  )
}

export default CitaList