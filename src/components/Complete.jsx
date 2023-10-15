import Image from 'next/image';
import React from 'react'

const Complete = ({citas, handleDelete}) => {

  const {cita, fecha, hora, id} = citas;

  return (
    <div className='mb-4 bg-slate-100 shadow-md rounded-md py-4 px-4 flex justify-between items-center mt-10'>
      <div>
        <p className='text-slate-700 font-normal'>Cliente: <span className='font-bold text-lg text-sky-800'>{cita}</span></p>
        <p className='text-slate-700 font-normal'>Fecha: <span className='font-bold text-lg text-sky-800'>{fecha}</span></p>
        <p className='text-slate-700 font-normal'>Horario: <span className='font-bold text-lg text-sky-800'>{hora}</span></p>

        <div className='mt-4 flex gap-3'>
          <button onClick={() => handleDelete(id)} className='bg-red-600 text-white font-bold py-2 px-6 hover:bg-red-800 rounded-md'>Eliminar ❌</button>
        </div>
      </div>
      <div>
        <Image src={'/img/corte-de-pelo.png'} width={100} height={100} alt='icono' />
      </div>
    </div>
  )
}

export default Complete