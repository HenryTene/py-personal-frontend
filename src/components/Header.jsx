import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="px-4 py-5 bg-white border-b ">
      <div className="md:flex md:justify-between ">
        <h2 className="text-4xl text-sky-600 font to-black">Simple Project</h2>
        <input
          type="search"
          placeholder="Buscar Proyecto"
          className="lg:w-1/3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-sky-600"
        />
        <div className="flex items-center gap-4">
          <Link to="/proyectos" className="font-bold uppercase ">
            Proyectos
          </Link>
          <button
            type="button"
            className="text-white text-sm bg-sky-600 p-3 rounded-md uppercase font-bold"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
