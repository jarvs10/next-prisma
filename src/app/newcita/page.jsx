"use client";
import FormCita from "@/components/FormCita";
import Navbar from "@/components/ui/Navbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const NewCita = ({ params }) => {
  const router = useRouter();

  const idCita = params.id;

  const [citas, setCitas] = useState({
    cita: "",
    fecha: "",
    hora: "",
  });

  const {cita, fecha, hora} = citas;

  useEffect(() => {
    if (idCita) {
      const getCita = async () => {
        const citaId = await axios.get(
          `http://localhost:3000/api/agendas/${idCita}`
        );

        setCitas({
          cita: citaId.data.cita,
          fecha: citaId.data.fecha,
          hora: citaId.data.hora,
        });
      };
      getCita();
    }
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    setCitas( {...citas, [name]: value} );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(cita === '' || fecha === '' || hora === ''){
      toast.error('Todos los campos son necesarios');

      return;
    }

    try {
      if (idCita) {
        await axios.put(`http://localhost:3000/api/agendas/${idCita}`, citas);

        toast.success("Cita successfully updated");

        setTimeout(() => {
          router.push("/citas");
        }, 2000);
      } else {
        await axios.post("http://localhost:3000/api/agendas/", citas);

        toast.success("Cita successfully added");

        setTimeout(() => {
          router.push("/citas");
        }, 2000);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="mt-16">
        <h2 className="bg-sky-600 py-2 px-2 font-bold text-center rounded-md">
          Cita y Resumen
        </h2>
      </div>

      <h2 className="mt-16 text-3xl">Resumen Cita</h2>

      <FormCita
        idCita={idCita}
        citas={citas}
        setCitas={setCitas}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewCita;
