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
      content: "",
      image: "",
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
      content: "",
      image: "",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/256/147/147028.png",
      name: "Transporte Local de Carga ",
      content: "",
      image: "",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/256/12113/12113850.png",
      name: "Asesorias y Capacitaciones",
      content: "",
      image: "",
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
        <Modal isOpen={modalOpen} closeModal={closeModal}>
          <AlternateImageText
            imageSrc={selectedCategory.image}
            title={selectedCategory.name}
            content={selectedCategory.content}
            imageFirst={true}
          />
        </Modal>
      )}
    </div>
  );
};

export default Category;
