import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";
import FormularioProyecto from "../components/FormularioProyecto";

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando, eliminarProyecto } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const handleClick = () => {
    if(confirm("¿Estas seguro de que quieres eliminar este proyecto?")){
      eliminarProyecto(params.id);
    }else{
      console.log("Cancelado");
    }
  }

  const { nombre } = proyecto;
  if (cargando)
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-900"></div>
      </div>
    );
  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">Editar Proyecto:{nombre}</h1>
        <div className="flex items-center gap-2 text-gray-400 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          <button
           className="uppercase font-bold"
           onClick={handleClick}
           >Eliminar</button>
        </div>
      </div>
      <div className="mt-10 flex justify-center ">
        <FormularioProyecto />
      </div>
    </>
  );
};

export default EditarProyecto;
