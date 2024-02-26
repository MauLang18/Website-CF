import React from "react";
import CustomCard from "../impacto/CustomCard";

const Mas = () => {
  return (
    <div className="lg:w-[950px] lg:h-[548px] w-full mx-auto">
      <div
        className="text-center text-black text-3xl font-bold mt-4"
        style={{ fontFamily: "'fuente', sans-serif" }}
      >
        IMPACTO INDUSTRIAL
      </div>
      <div className="w-full mt-4 grid grid-cols-1 sm:grid-cols-3 justify-center">
        <CustomCard
          imageSrc="constuccion.jpg"
          text="Tenemos mas de cinco (5) años de experiencia haciendo posible las necesidades logísticas para el transporte de la línea de maquinaria verde y amarilla para los constructores locales. Principales origenes Panama, Estados Unidos, Mexico, Europa y Japon."
          title="GREMIO DE LA CONSTRUCCION"
          img={true}
        />
        <CustomCard
          imageSrc="llantas.jpg"
          text="Movilizamos mas de 100 contenedores mes a mes desde los principales puertos de ASIA hacia America Latina."
          title="INDUSTRIA NEUMATICOS / LLANTAS"
          img={true}
        />
        <CustomCard
          imageSrc="agricultura.jpg"
          text="Formamos parte en esta industria, como unos de los principales proveedores, que colaboran a nuestro sector agricola - productivo en sus importaciones o exportaciones de insumos y productos finales"
          title="SECTOR  AGRICOLA"
          img={true}
        />
      </div>
    </div>
  );
};

export default Mas;
