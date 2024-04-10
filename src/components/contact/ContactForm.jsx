import React, { useState } from "react";
import axios from "axios";
import Maps from "./Maps";
import Contact from "./Contact"

const initialForm = {
  name: "",
  lastname: "",
  phone: "",
  email: "",
  message: "",
};

const validateForm = (form) => {
  let errores = {};

  if (!form.name.trim()) {
    errores.name = "El campo 'Nombre' es requerido";
  }
  if (!form.lastname.trim()) {
    errores.lastname = "El campo 'Apellido' es requerido";
  }
  if (!form.phone.trim()) {
    errores.phone = "El campo 'Teléfono' es requerido";
  }
  if (!form.email.trim()) {
    errores.email = "El campo 'Correo' es requerido";
  }
  if (!form.message.trim()) {
    errores.message = "El campo 'Mensaje' es requerido";
  }

  return errores;
};

const ContactForm = () => {
  const [form, setForm] = useState(initialForm);
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrores(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrores(validateForm(form));

    if (Object.keys(errores).length === 0) {
      setLoading(true);
      axios
        .post("https://api.logisticacastrofallas.com/api/Mail/Send", {
          para: "maulangbonilla.18@gmaail.com",
          asunto: "Contacto",
          contenido: `
            <p><strong>Nombre:</strong> ${form.name}</p>
            <p><strong>Apellido:</strong> ${form.lastname}</p>
            <p><strong>Teléfono:</strong> ${form.phone}</p>
            <p><strong>Correo Electrónico:</strong> ${form.email}</p>
            <p><strong>Mensaje:</strong> ${form.message}</p>
          `,
        })
        .then((res) => {
          setLoading(false);
          alert("Mensaje enviado.");
          setResponse(true);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error al enviar el mensaje:", error);
          // Aquí puedes manejar el error de acuerdo a tus necesidades
        });
    } else {
      return;
    }
  };

  const getErrorForField = (fieldName) => {
    return errores[fieldName] ? (
      <p className="font-bold text-red-500">{errores[fieldName]}</p>
    ) : null;
  };

  return (
    <div className="container mx-auto p-8" id="contacto">
      <div id="titulo">
        <div className="col-md-12 wow animated fadeInLeft" data-wow-delay=".2s">
          <h1
            className="text-center text-black text-3xl font-bold mt-4 mb-20"
            style={{ fontFamily: "'fuente', sans-serif" }}
          >
            <b>Contáctenos</b>
          </h1>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Maps />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        <div id="textoC" className="mt-10 text-left lg:text-xl">
          <ul>
            <li className="mb-1">
              <b className="lg:text-xl">Correo electrónico</b>
              <p className="lg:text-lg">info@grupocastrofallas.com</p>
            </li>
            <li className="mb-2">
              <b className="lg:text-xl">Número de teléfono</b>
              <p className="lg:text-lg">+506 2272-6772</p>
            </li>
            <li>
              <b className="lg:text-xl">WhatsApp</b>
              <p className="lg:text-lg">+506 7005-1261</p>
            </li>
          </ul>
        </div>
        <div className="wow animated fadeInRight" data-wow-delay=".2s">
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
