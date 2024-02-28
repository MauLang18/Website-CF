import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../modal/Modal";
import AlternateImageText from "./AlternateImageText";

const Category = () => {
  const navigate = useNavigate();

  const category = [
    {
      icon: "https://cdn-icons-png.flaticon.com/256/4695/4695562.png",
      name: "Logistica Internacional",
      title1: "Logistica Marítima",
      title2: "Logistica Terrestre",
      title3: "Logistica Aérea",
      content1: `
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
      content2: `
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
      content3: `
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
      image1: "../logistica_maritima.jpg",
      image2: "../logistica_terreste.jpg",
      image3: "../logistica_aerea.jpg",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/256/2760/2760975.png",
      name: "Agenciamiento Aduanal",
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
      icon: "https://cdn-icons-png.flaticon.com/256/1350/1350237.png",
      name: "Almacenaje Fiscal-General",
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
      icon: "https://cdn-icons-png.flaticon.com/256/147/147028.png",
      name: "Transporte Local de Carga ",
      content: `
  <p>
    <strong>Equipos y personal con experiencia, servicio 24/7.</strong>
  </p>
  <p>
    Con una flotilla con <strong>ubicación satelital.</strong>
  </p>
  <p>
    Capacidad de transporte en modalidades: <strong>Seco, Congelado, Refrigerado, Sobredimensionado.</strong>
  </p>
  <p>
    Traslado de contenedores.
  </p>
`,
      image: "../transporte_carga.jpg",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/256/12113/12113850.png",
      name: "Asesorias y Capacitaciones",
      content: `
  <p>
    Brindamos a nuestros clientes una serie de capacitaciones mensuales, ya sea de manera presencial o virtual, sobre diversos temas de interés del comercio internacional. También ofrecemos asesorías personalizadas en materia técnica aduanal y comercio exterior.
  </p>
  <p>
    Consulta por nuestro calendario de capacitaciones mensuales o bien, solicita una asesoría personalizada.
  </p>
`,
      image: "../asesorias_capacitaciones.jpg",
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
          <div className="flex space-x-2 lg:space-x-4">
            {category.map((item, index) => (
              <div key={index} className="lg:px-2 text-center">
                <div
                  onClick={() => openModal(item)}
                  className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-[#e21c21] transition-all hover:bg-[#ff1f1f] cursor-pointer mb-1"
                >
                  <div className="flex justify-center mb-12">
                    <img src={item.icon} alt="img" />
                  </div>
                </div>
                <h1 className="text-sm lg:text-lg font-medium title-font first-letter:uppercase">
                  <div className="flex flex-col">
                    {item.name.split(" ").map((word, i) => (
                      <span key={i}>{word}</span>
                    ))}
                  </div>
                </h1>
              </div>
            ))}
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
