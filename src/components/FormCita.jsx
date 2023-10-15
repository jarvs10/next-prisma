import { generarFecha, horas } from "@/helpers/config";
import React from "react";

const FormCita = ({ handleChange, citas, handleSubmit, idCita }) => {

  const { cita, fecha, hora } = citas;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 shadow-md rounded-md py-8 px-6 text-black mt-6"
    >
      <div className="flex justify-around mb-10">
        <div className="mt-10">
          <label className="block mb-2 text-xl" htmlFor="cita">
            Usuario:
          </label>
          <input
            onChange={handleChange}
            value={cita}
            className="text-black py-2 px-2 rounded-md"
            type="text"
            name="cita"
            id="cita"
          />
        </div>

        <div className="mt-10">
          <label className="block mb-2 text-xl" htmlFor="fecha">
            Fecha:
          </label>
          <input onChange={handleChange} value={fecha} className="text-black py-2 px-6 rounded-md" type="date" name="fecha" id="fecha" min={'2023-10-15'} />
        </div>

        <div className="mt-10">
          <label className="block mb-2 text-xl" htmlFor="hora">
            Hora:
          </label>
          <select
            className="text-black py-2 px-6 rounded-md"
            type="time"
            onChange={handleChange}
            value={hora}
            name="hora"
            id="hora"
          >
            {horas.map((hora) => {
              return (
                <option key={hora} value={hora}>
                  {hora}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <input
          className="py-2 px-12 bg-sky-600 hover:bg-sky-800 font-bold rounded-md cursor-pointer text-center text-white"
          type="submit"
          value={idCita ? "Actualizar Cita" : "Confirmar Cita"}
        />
      </div>
    </form>
  );
};

export default FormCita;
