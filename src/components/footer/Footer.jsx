import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Actualizar el año cada vez que cambie
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60); // Actualiza cada hora (puedes ajustar el intervalo según tus necesidades)

    // Limpiar el intervalo cuando el componente se desmonte para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div>
      {/* footer  */}
      <footer className="text-black body-font bg-[#eeeff2]">
        {/* main  */}
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          {/* logo  */}
          <Link to={"/"}>
            {/* Cambiado de texto a imagen */}
            <img src="../img/logo.png" alt="Logo" className="h-[100px]" />
          </Link>
          {/* para  */}
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {year} Grupo Castro Fallas |{" "}
            <a
              href="https://customcodecr.com"
              className="text-blue-500 font-bold hover:text-blue-700"
              target="blank"
            >
              Desarrollado por CustomCodeCR
            </a>
          </p>

          {/* media icon  */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* facebook  */}
            <a
              href="https://es-la.facebook.com/grupocastrofallas1/"
              className="text-black cursor-pointer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* twitter  */}
            <a
              href="https://twitter.com/castrofagrupo"
              className="ml-3 text-black cursor-pointer"
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>

            {/* instagram  */}
            <a
              href="https://www.instagram.com/grupocastrofallas1/"
              className="ml-3 text-black cursor-pointer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>

            {/* linkedIn  */}
            <a
              href="https://www.linkedin.com/company/grupo-castro-fallas/"
              className="ml-3 text-black cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
