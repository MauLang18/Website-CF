import { useForm } from "../modal/useForm";
import { useState } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  operacion: [],
  negociacion: "",
  servicio: "",
  origen: "",
  destino: "",
  producto: "",
  valor: "",
  serviciosIntegrales: [],
  peso: "",
  volumen: "",
  dimensiones: "",
  message: "",
};

const validateForm = (form) => {
  let errores = {};

  if (!form.name.trim()) {
    errores.name = "El campo 'Nombre' es requerido";
  }
  if (!form.phone.trim()) {
    errores.phone = "El campo 'Teléfono' es requerido";
  }
  if (!form.email.trim()) {
    errores.email = "El campo 'Correo' es requerido";
  }
  if (!form.phone.trim()) {
    errores.phone = "El campo 'Teléfono' es requerido";
  }
  return errores;
};

const CotizacionForm = ({ closeModal }) => {
  const [open, setOpen] = useState(true);
  const {
    form,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validateForm, () => closeModal());

  const handleCloseModal = () => {
    closeModal();
    setOpen(false);
  };

  const handleCheckboxChange = (option) => {
    // Clona el array de opciones seleccionadas para evitar mutar el estado directamente
    const updatedOpcionesCheckbox = [...formData.serviciosIntegrales];

    // Verifica si la opción ya está en la lista de seleccionados
    const index = updatedOpcionesCheckbox.indexOf(option);

    if (index === -1) {
      // Si no está seleccionada, agrégala a la lista
      updatedOpcionesCheckbox.push(option);
    } else {
      // Si ya está seleccionada, quítala de la lista
      updatedOpcionesCheckbox.splice(index, 1);
    }

    // Actualiza el estado con las opciones actualizadas
    handleChange({
      target: { name: "serviciosIntegrales", value: updatedOpcionesCheckbox },
    });
  };

  const handleCheckboxChange1 = (option) => {
    // Clona el array de opciones seleccionadas para evitar mutar el estado directamente
    const updatedOpcionesCheckbox = [...form1.operacion];

    // Verifica si la opción ya está en la lista de seleccionados
    const index = updatedOpcionesCheckbox.indexOf(option);

    if (index === -1) {
      // Si no está seleccionada, agrégala a la lista
      updatedOpcionesCheckbox.push(option);
    } else {
      // Si ya está seleccionada, quítala de la lista
      updatedOpcionesCheckbox.splice(index, 1);
    }

    // Actualiza el estado con las opciones actualizadas
    handleChange({
      target: { name: "operacion", value: updatedOpcionesCheckbox },
    });
  };

  return (
    <Dialog open={open} handler={handleCloseModal} className="bg-[#f5f5f5]">
      <DialogBody className="space-y-4 overflow-auto max-h-[400px]">
        <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
          Información de usuario
        </label>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre Empresa
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Ingrese la empresa"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.name}
            required
          />
          {errores.name && (
            <p className="font-bold text-red-500">{errores.name}</p>
          )}
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            placeholder="Ingrese su teléfono"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.phone}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Correo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Ingrese su correo"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.email}
            required
          />
        </div>
        <label className="block text-gray-700 text-md font-bold mb-4">
          Información operación
        </label>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="operacion"
          >
            Tipo Operación
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="operacion"
                value="Importación"
                onChange={() => handleCheckboxChange1("Importación")}
                checked={form.serviciosIntegrales.includes("Importación")}
              />
              <span className="ml-2">Importación</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="operacion"
                value="Exportación"
                onChange={() => handleCheckboxChange1("Exportación")}
                checked={form.serviciosIntegrales.includes("Exportación")}
              />
              <span className="ml-2">Exportación</span>
            </label>
          </div>
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="negociacion"
          >
            Termino Negociación
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="negociacion"
            name="negociacion"
            value={form.negociacion}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="EXW">EXW</option>
            <option value="FOB">FOB</option>
            <option value="DDP">DDP</option>
            <option value="CIF">CIF</option>
            <option value="CFR">CFR</option>
            <option value="DAP">DAP</option>
            <option value="FCA">FCA</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="servicio"
          >
            Servicio
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="servicio"
            name="servicio"
            value={form.servicio}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Marítimo LCL">Marítimo LCL</option>
            <option value="Marítimo FCL 1X40STD/HC">
              Marítimo FCL 1X40STD/HC
            </option>
            <option value="Marítimo FCL 1X20STD">Marítimo FCL 1X20STD</option>
            <option value="Aéreo">Aéreo</option>
            <option value="Carga Proyecto">Carga Proyecto</option>
            <option value="Terrestre LTL">Terrestre LTL</option>
            <option value="Terrestre FTL 1X53/48">Terrestre FTL 1X53/48</option>
            <option value="Terrestre FTL 1X20">Terrestre FTL 1X20</option>
          </select>
        </div>
        <div className="flex flex-wrap -mx-2 mb-4">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="origen"
            >
              Origen
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="origen"
              name="origen"
              value={form.origen}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Miami, USA (SD)">Miami, USA (SD)</option>
              <option value="Port Everglades, USA (CY)">
                Port Everglades, USA (CY)
              </option>
              <option value="Qingdao, CN (CY)">Qingdao, CN (CY)</option>
              <option value="Shanghai, CN (CY)">Shanghai, CN (CY)</option>
              <option value="Ningbo, CN (CY)">Ningbo, CN (CY)</option>
              <option value="Yantian, CN (CY)">Yantian, CN (CY)</option>
              <option value="Xingang, CN (CY)">Xingang, CN (CY)</option>
              <option value="Xiamen, CN (CY)">Xiamen, CN (CY)</option>
              <option value="Chongqing, CN">Chongqing, CN</option>
              <option value="Ho Chi Minh, Vietnam">Ho Chi Minh, Vietnam</option>
              <option value="Mundra, India">Mundra, India</option>
              <option value="San José, Costa Rica">San José, Costa Rica</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="destino"
            >
              Destino
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="destino"
              name="destino"
              value={form.destino}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="Puerto Caldera, CRC (CY)">
                Puerto Caldera, CRC (CY)
              </option>
              <option value="Puerto Moin, CRC (CY)">
                Puerto Moin, CRC (CY)
              </option>
              <option value="San José, CRC (SD)">San José, CRC (SD)</option>
              <option value="Puerto Quetzal, Guatemala">
                Puerto Quetzal, Guatemala
              </option>
              <option value="Puerto Callao, Perú">Puerto Callao, Perú</option>
              <option value="Zona Libre, Colón, Panamá">
                Zona Libre, Colón, Panamá
              </option>
            </select>
          </div>
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="producto"
          >
            Tipo Producto
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="producto"
            name="producto"
            value={form.producto}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona una opción</option>
            <option value="Carga General">Carga General</option>
            <option value="Carga Peligrosa">Carga Peligrosa</option>
            <option value="Alimentos">Alimentos</option>
            <option value="Menaje Casa">Menaje Casa</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="valor"
          >
            Valor Mercancía
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="valor"
            type="text"
            name="valor"
            placeholder="Ingrese el valor de la mercancía"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.valor}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="serviciosIntegrales"
          >
            Servicios Integrales
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="serviciosIntegrales"
                value="Seguro Carga"
                onChange={() => handleCheckboxChange("Seguro Carga")}
                checked={form.serviciosIntegrales.includes("Seguro Carga")}
              />
              <span className="ml-2">Seguro Carga</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="serviciosIntegrales"
                value="Transporte Nacional"
                onChange={() => handleCheckboxChange("Transporte Nacional")}
                checked={form.serviciosIntegrales.includes(
                  "Transporte Nacional"
                )}
              />
              <span className="ml-2">Transporte Nacional</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="serviciosIntegrales"
                value="Agencia Aduanas"
                onChange={() => handleCheckboxChange("Agencia Aduanas")}
                checked={form.serviciosIntegrales.includes("Agencia Aduanas")}
              />
              <span className="ml-2">Agencia Aduanas</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="serviciosIntegrales"
                value="Almacén Fiscal"
                onChange={() => handleCheckboxChange("Almacén Fiscal")}
                checked={form.serviciosIntegrales.includes("Almacén Fiscal")}
              />
              <span className="ml-2">Almacén Fiscal</span>
            </label>
          </div>
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="peso"
          >
            Peso
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="peso"
            type="text"
            name="peso"
            placeholder="Ingrese el peso de la mercancía"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.peso}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="volumen"
          >
            Volumen
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="volumen"
            type="text"
            name="volumen"
            placeholder="Ingrese el volumen de la mercancía"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.volumen}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dimensiones"
          >
            Dimensiones
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dimensiones"
            type="text"
            name="dimensiones"
            placeholder="Ingrese las dimensiones de la mercancía"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.dimensiones}
            required
          />
        </div>
        <div className="form-group mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Observaciones
          </label>
          <textarea
            className="border py-2 px-3 form-textarea mt-1 block w-full rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            id="message"
            name="message"
            rows="3"
            placeholder="Escriba las observaciones"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.message}
          ></textarea>
        </div>
        <div className="form-submit mt-5">
          <button
            type="submit"
            className="bg-[#e21c21] hover:bg-[#ff1f1f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
            onClick={closeModal}
          >
            Cancelar
          </button>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default CotizacionForm;
