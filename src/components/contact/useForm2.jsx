import React, { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
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
      helpHttp()
        .post("https://api.logisticacastrofallas.com/api/Mail/Send", {
          body: {
            para: "maulangbonilla.18@gmaail.com",
            asunto: "Contacto",
            contenido: `
              <p><strong>Nombre:</strong> ${form.name}</p>
              <p><strong>Apellido:</strong> ${form.lastname}</p>
              <p><strong>Teléfono:</strong> ${form.phone}</p>
              <p><strong>Correo Electrónico:</strong> ${form.email}</p>
              <p><strong>Mensaje:</strong> ${form.message}</p>
            `,
          },
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => {
          setLoading(false);
          alert("Mensaje enviado.");
          setResponse(true);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
