import { useEffect } from "react";
import useProyectos from "../hooks/useProyectos";
import { useParams } from "react-router-dom";
import FormularioProyecto from "../components/FormularioProyecto";

const EditarProyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando } = useProyectos();

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;
  if (cargando)
    return (
      <div class=" flex justify-center items-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-900"></div>
      </div>
    );
  return (
    <>
      <h1 className="font-black text-4xl">Editar Proyecto:{nombre}</h1>
      <div className="mt-10 flex justify-center ">
        <FormularioProyecto />
      </div>
    </>
  );
};

export default EditarProyecto;
