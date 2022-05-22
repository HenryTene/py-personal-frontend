import { formatearFecha } from "../helpers/formatearFecha";

const Tarea = ({ tarea }) => {
  const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea;

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div>
        <p className="mb-2 text-xl">{nombre}</p>
        <p className="mb-2 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-2 text-xl">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-2 text-gray-600">Prioridad: {prioridad}</p>
      </div>

      <div className="flex gap-2">
        <button
          className="bg-indigo-600 py-3 px-4 text-white 
           uppercase font-bold text-sm  rounded-lg"
        >
          Editar
        </button>
        {estado ? (
          <button
            className="bg-green-600 py-3 px-4 text-white 
                  uppercase font-bold text-sm  rounded-lg"
          >
            Completa
          </button>
        ) : (
          <button
            className="bg-orange-600 py-3 px-4 text-white 
                 uppercase font-bold text-sm  rounded-lg"
          >
            Incompleta
          </button>
        )}

        <button
          className="bg-red-600 py-3 px-4 text-white 
           uppercase font-bold text-sm  rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Tarea;