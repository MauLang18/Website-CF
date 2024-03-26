import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import AlternateImageText from "./AlternateImageText";

const Category = () => {
  const navigate = useNavigate();

  const category = [
    {
      icon: "../transporte_internacional_maritimo.png",
      name: `Transporte Internacional <br/> Marítimo`,
      content: `
  <div>
    <p>
      <strong>MODALIDAD LCL:</strong> Mayor flexibilidad en la gestión del almacenaje.
    </p>
    <p>
      Las tarifas se ajustan al volumen y el peso de la carga.
    </p>
    <p>
      Tarifas de transporte marítimo menos volátiles.
    </p>
    <p>
      Costos más bajos de transporte terrestre.
    </p>
    <p>
      Agilidad en el despacho de aduanas.
    </p>
  </div>
  <div>
    <p>
      <strong>MODALIDAD FCL:</strong> La recolección y la entrega de la carga se programan fácilmente.
    </p>
    <p>
      La carga viaja con total seguridad, sin riesgo de daños por manipulaciones adicionales.
    </p>
    <p>
      Gastos portuarios locales estandarizados.
    </p>
    <p>
      No hay riesgo de retrasos o daños por el contacto con las cargas de otros expedidores.
    </p>
  </div>
`,
      image: "../logistica_maritima.jpg",
    },
    {
      icon: "../transporte_internacional_terrestre.png",
      name: `Transporte Internacional <br/> Terrestre`,
      content: `
  <div>
    <p>
      <strong>MODALIDAD LTL:</strong> Mayor flexibilidad en la gestión del almacenaje.
    </p>
    <p>
      Las tarifas se ajustan al volumen y el peso de la carga.
    </p>
    <p>
      Tarifas de transporte terrestre menos volátiles.
    </p>
    <p>
      Agilidad en el despacho de aduanas.
    </p>
  </div>
  <div>
    <p>
      <strong>MODALIDAD FTL:</strong> La recolección y la entrega de la carga se programan fácilmente.
    </p>
    <p>
      La carga viaja con total seguridad, sin riesgo de daños por manipulaciones adicionales.
    </p>
    <p>
      Gastos fronterizos locales estandarizados.
    </p>
    <p>
      No hay riesgo de retrasos o daños por el contacto con las cargas de otros expedidores.
    </p>
  </div>
`,
      image: "../logistica_terreste.jpg",
    },
    {
      icon: "../transporte_internacional_aereo.png",
      name: `Transporte Internacional <br/> Aéreo`,
      content: `
  <p>
    <strong>MODALIDAD LCL:</strong> Mayor flexibilidad en la gestión del almacenaje.
  </p>
  <p>
    Las tarifas se ajustan al volumen y el peso de la carga.
  </p>
  <p>
    Tarifas de transporte aéreo menos volátiles.
  </p>
  <p>
    Costos más bajos de transporte terrestre.
  </p>
  <p>
    Agilidad en el despacho de aduanas.
  </p>
`,
      image: "../logistica_aerea.jpg",
    },
    {
      icon: "../proyecto_carga.png",
      name: "Proyecto Carga",
      content: `
  <p>
    Ofrecemos el transporte de carga especial, como carga sobredimensionada, maquinaria y vehículos pesados, carga proyecto, carga a granel, carga refrigerada, carga peligrosa, siempre ajustando las soluciones según los requerimientos específicos de cada caso.
  </p>
`,
      image: "../logistica_aerea.jpg",
    },
  ];

  const category2 = [
    {
      icon: "../tramites_de_aduanas.png",
      name: `Tramites de <br/> Aduanas`,
      content: `
  <p>
    <strong>Personal altamente calificado, profesional y técnico.</strong> Le brindamos nuestro servicio de agencia de aduanas en <strong>IMPORT</strong> o <strong>EXPORT</strong> en los diferentes mercados:
  </p>

  <ul>
    <li>COSTA RICA</li>
    <li>PANAMÁ</li>
    <li>GUATEMALA</li>
    <li>USA</li>
    <li>MÉXICO</li>
    <li>EL SALVADOR</li>
    <li>HONDURAS</li>
    <li>NICARAGUA</li>
    <li>COLOMBIA</li>
    <li>PERÚ</li>
    <li>BRASIL</li>
    <li>CHILE</li>
    <li>ESPAÑA</li>
    <li>CHINA</li>
    <li>CANADÁ</li>
  </ul>

  <p>
    Trabajamos con los diferentes tipos de <strong>INCOTERMS</strong>, desde un <strong>EXW</strong> hasta un <strong>DDP</strong>. Nuestras oficinas habilitadas para agenciamiento aduanal alrededor del mundo están esperando su solicitud.
  </p>
`,
      image: "../agenciamiento_aduanal.jpg",
    },
    {
      icon: "../whs.png",
      name: `Almacenes de Carga <br/> General/Fiscal`,
      content: `
  <p>
    <strong>Almacén Fiscal en CRC:</strong> Instalaciones propias con gran capacidad de almacenamiento.
  </p>
  <p>
    Bodegas propias en <strong>ZONA LIBRE, COLÓN, PANAMÁ.</strong>
  </p>
  <p>
    Red de bodegas y almacenes con espacios, tarifas preferenciales hacia nuestros clientes.
  </p>
`,
      image: "../almacen_fiscal.jpg",
    },
    {
      icon: "../seguro_de_carga.png",
      name: `Seguros de Carga <br/> Internacional`,
      content: `
  <p>
    Brindamos a nuestros clientes la facilidad de emisión de pólizas de seguro de carga internacional de manera inmediata y con tarifas muy competitivas. Resguardando así tus envíos en import o export.
  </p>
`,
      image: "../transporte_carga.jpg",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});

  const openModal = (item) => {
    setSelectedCategory(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div id="servicios" className="flex flex-col mt-5">
        <div className="">
          <h1 className="text-center mb-5 text-2xl font-semibold">Servicios</h1>
        </div>

        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex space-x-4">
            {category.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  onClick={() => openModal(item)}
                  className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full transition-all hover:bg-[#ff1f1f] cursor-pointer mb-1 flex items-center justify-center"
                >
                  <img src={item.icon} alt="img" />
                </div>
                <h1 className="text-sm lg:text-lg font-medium title-font first-letter:uppercase text-center overflow-hidden h-12">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: item.name,
                    }}
                  />
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-red-500 p-4 rounded-md">
          <h1 className="text-xl lg:text-2xl font-bold mb-4 text-center text-red-500">
            Servicios Adicionales
          </h1>
          <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar ">
            <div className="flex space-x-4">
              {category2.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    onClick={() => openModal(item)}
                    className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full transition-all hover:bg-[#ff1f1f] cursor-pointer mb-1 flex items-center justify-center"
                  >
                    <img src={item.icon} alt="img" />
                  </div>
                  <h1 className="text-sm lg:text-lg font-medium title-font first-letter:uppercase text-center overflow-hidden h-12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.name,
                      }}
                    />
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div>
          <Modal isOpen={modalOpen} closeModal={closeModal}>
            <AlternateImageText
              imageSrc={selectedCategory.image}
              title={selectedCategory.name}
              content={selectedCategory.content}
              imageFirst={true}
            />
          </Modal>

          {selectedCategory.image1 && (
            <Modal isOpen={modalOpen} closeModal={closeModal}>
              <AlternateImageText
                imageSrc={selectedCategory.image1}
                title={selectedCategory.title1}
                content={selectedCategory.content1}
                imageFirst={true}
              />
              <AlternateImageText
                imageSrc={selectedCategory.image2}
                title={selectedCategory.name2}
                content={selectedCategory.content2}
                imageFirst={false}
              />
              <AlternateImageText
                imageSrc={selectedCategory.image3}
                title={selectedCategory.name3}
                content={selectedCategory.content3}
                imageFirst={true}
              />
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
