import SectionData from "../nosotros/SectionData";

const Nosotros = () => {
  const imageData = {
    imageSrc: "nosotros.png",
  };

  const sectionData = {
    titles: ["Nosotros", "Valores"],
    contents: [
      "Castro Fallas Logistica Internacional es una compañía creada hace 37 años, con el fin de satisfacer las necesidades de los diferentes eslabones de la cadena logística y los diferentes actores que en ella intervienen, a través de la gestión, coordinación y supervisión del transporte de mercancías con los diferentes medios a nivel nacional e internacional, para carga de importación y exportación. ",
      "Compromiso, Ética, Trabajo en equipo, Experiencia, Calidad",
    ],
  };
  return (
    <section id="nosotros" className="xl:mt-20 mt-[-450px]">
      <div className="white p-8 flex flex-col items-center justify-center gap-8 mt-[500px] xl:mt-0">
        <SectionData {...imageData} {...sectionData} imageFirst={true} />
      </div>
    </section>
  );
};

export default Nosotros;
