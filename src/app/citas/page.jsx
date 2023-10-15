'use client'
import CitaList from "@/components/CitaList";
import Navbar from "@/components/ui/Navbar";
import { ContextUse } from "@/context/ContextProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CitasPage = () => {

  const router = useRouter();

  const [citas, setCitas] = useState([]);

  const { user } = ContextUse();

  useEffect(() => {
    const getCitas = async () => {
      const citas = await axios.get('http://localhost:3000/api/agendas');

      setCitas(citas.data);
    }
    getCitas();
  }, [])

  return (
    <div>
      <Navbar />

      <div className="flex justify-between items-center mt-16">
        <h2 className="text-2xl font-bold">Mis Citas:</h2>

        <div className="flex gap-3">
          <button onClick={() => router.push('/newcita')} className="py-2 bg-sky-600 hover:bg-sky-800 px-6 rounded-md font-bold text-lg">
            Agregar nueva cita
          </button>
          <button onClick={() => router.push('/completadas')} className="py-2 bg-lime-600 hover:bg-lime-800 px-6 rounded-md font-bold text-lg">
            Citas Completadas
          </button>

        </div>


      </div>

      <div className="mt-10 text-black">
        {
          user?.email
            ? citas.length === 0
              ? <h1 className="text-4xl font-bold text-center text-white">No tienes citas pendientes</h1>
              : citas.map(citad => {
                return (
                  <CitaList
                    key={citad.id}
                    citad={citad}
                  />
                )
              })
            : <>
              <h1 className="text-4xl font-bold text-center text-white mb-4">Debes Iniciar Sesion para ver tu lista de Citas</h1>
              <div className="flex justify-center">
                <button onClick={() => router.push('/task')} className="bg-sky-600 hover:bg-sky-800 py-2 px-6 text-white rounded-md">
                  Iniciar Sesion
                </button>
              </div>

            </>
        }
      </div>
    </div>
  );
};

export default CitasPage;
