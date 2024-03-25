import React, { useState } from "react";

const CargoShippingText = () => {
  const [itineraryButtonPressed, setItineraryButtonPressed] = useState(false);

  const cargoShippingText =
    "Gestiona, controla y rastrea tu carga con agilidad y seguridad. COTIZA Y RESERVA EN SEGUNDOS.\n\n" +
    "COTIZA ONLINE CON DOS CLICS Obtén los precios más actualizados de las navieras.\n\n" +
    "GESTIONA TUS OPERACIONES Sube la documentación, reserva y paga online. De forma fácil y rápida desde cualquier dispositivo.\n\n" +
    "RASTREA TU CARGA EN TIEMPO REAL Monitoriza tus envíos por barco 24/7 o recibe mensajes automáticos en cuanto el estado de tu carga cambie.\n\n" +
    "CONTÁCTA A NUESTRO EQUIPO (+57) 601-3289085";

  const reviseItineraries = () => {
    window.location.href = "https://dashboard.logisticacastrofallas.com";
  };

  return (
    <div className="bg-gray-50 p-4 rounded">
      <div className="text-3xl font-bold text-center mb-6">
        <span className="text-green-500 block">COTIZA TU CARGA</span>
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={reviseItineraries}
        >
          REVISAR ITINERARIOS
        </button>
      </div>

      <p className="text-xl mb-4">
        COTIZA ONLINE CON DOS CLICS Obtén los precios más actualizados de las
        navieras.
      </p>

      <div className="text-xl">
        <div>
          <p className="mb-1 font-bold">GESTIONA TUS OPERACIONES</p>
          <p>
            Sube la documentación, reserva y paga online. De forma fácil y
            rápida desde cualquier dispositivo.
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-1 font-bold">RASTREA TU CARGA EN TIEMPO REAL</p>
          <p>
            Monitoriza tus envíos por barco 24/7 o recibe mensajes automáticos
            en cuanto el estado de tu carga cambie.
          </p>
        </div>

        <div className="mt-4">
          <p className="font-bold">
            CONTÁCTA A NUESTRO EQUIPO pricing@grupocastrofallas.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default CargoShippingText;
