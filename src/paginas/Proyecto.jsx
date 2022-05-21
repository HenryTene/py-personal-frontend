import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useProyectos from "../hooks/useProyectos";
import ModalFormularioTarea from "../components/ModalFormularioTarea";

const Proyecto = () => {
  const params = useParams();
  const { obtenerProyecto, proyecto, cargando, handleModalTarea } =
    useProyectos();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    obtenerProyecto(params.id);
  }, []);

  const { nombre } = proyecto;

  return cargando ? (
    <div className=" flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-900"></div>
    </div>
  ) : (
    <>
      <div className="flex justify-between">
        <h1 className="font-black text-4xl">{nombre}</h1>
        <div className="flex items-center gap-2 text-gray-400 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            to={`/proyectos/editar/${params.id}`}
            className="uppercase font-bold"
          >
            Editar
          </Link>
        </div>
      </div>
      <button
        onClick={handleModalTarea}
        type="button"
        className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase font-bold 
        bg-sky-400 text-white text-center  mt-5 flex gap-2 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
        Nueva Tarea
      </button>

      <ModalFormularioTarea modal={modal} setModal={setModal} />
    </>
  );
};

export default Proyecto;
