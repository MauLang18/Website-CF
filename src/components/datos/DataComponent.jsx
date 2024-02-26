import React from "react";

const DataComponent = () => {
  const data = {
    oficinas: "+25 Oficinas a nivel Mundial",
    consolidados: "#1 Consolidados terrestre Panamá - CRC",
    rutas: "+105 Rutas de Transporte Internacional",
    atencion: "24/7 Atencion a nuestros clientes",
  };

  return (
    <div className="bg-red-500 p-4 md:p-0 md:h-20 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 border-b-2 md:border-b-0 md:border-r-2 border-white h-16 flex flex-col justify-center">
          <div className="text-white text-center md:text-left">
            {data.oficinas}
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 border-b-2 md:border-b-0 md:border-r-2 border-white h-16 flex flex-col justify-center">
          <div className="text-white text-center md:text-left">
            {data.consolidados}
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-4 md:mb-0 md:mr-4 border-b-2 md:border-b-0 md:border-r-2 border-white h-16 flex flex-col justify-center">
          <div className="text-white text-center md:text-left">
            {data.rutas}
          </div>
        </div>
        <div className="w-full md:w-1/4 h-16 flex flex-col justify-center">
          <div className="text-white text-center md:text-left">
            {data.atencion}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataComponent;
