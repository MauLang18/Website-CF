import React from "react";
import { useForm } from "../contact/useForm2";
import Maps from "./Maps";

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
  const {
    form,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm);

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
        {/*codigo con datos / se pasan los datos a otro lado, aqui el mapa*/}
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
          <form className="shake" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-2 mb-4">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nombre <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ingrese su nombre"
                  value={form.name}
                  required
                />
                {getErrorForField("name")}
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="lastname"
                >
                  Apellido <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="lastname"
                  placeholder="Ingrese su apellido"
                  value={form.lastname}
                  required
                />
                {getErrorForField("lastname")}
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="phone"
                  placeholder="Ingrese su teléfono"
                  value={form.phone}
                  required
                />
                {getErrorForField("phone")}
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Correo electrónico <span className="text-red-500">*</span>
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  value={form.email}
                  required
                />
                {getErrorForField("email")}
              </div>
              <div className="w-full px-2">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Ingrese su mensaje"
                  value={form.message}
                  required
                ></textarea>
                {getErrorForField("message")}
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#e21c21] hover:bg-[#ff1f1f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
