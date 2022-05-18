import { Link } from "react-router-dom";

const Registrar = () => {
  return (
    <>
      <h1 className="text-sky-600 font-black text-6xl">
        Regístrate <span className="text-slate-800">Gratis </span>{" "}
      </h1>
      <form action="" className="my-10 bg-white shadow rounded-lg p-10">
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full mt-3 p-3  border rounded-xl bg-gray-50 "
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa tu email"
            className="w-full mt-3 p-3  border rounded-xl bg-gray-50 "
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu password"
            className="w-full mt-3 p-3  border rounded-xl bg-gray-50 "
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
           Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Vuelve ingresar tu password"
            className="w-full mt-3 p-3  border rounded-xl bg-gray-50 "
          />
        </div>
        <input
          type="submit"
          value="Crear cuenta"
          className="bg-sky-700 mb-5 w-full  py-3 uppercase   font-bold text-white 
         rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between ">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm "
          to="/"
        >
          {" "}
          ¿Ya tienes cuenta? Inicia Sesión{" "}
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm "
          to="/olvide-password"
        >
          {" "}
          Olvidé mi password{" "}
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
