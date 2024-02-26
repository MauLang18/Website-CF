import React, { useState, useEffect } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import "../buyNowModal/timeline.css";

const TrackingForm = ({ data, handleClose }) => {
  const [searchOption, setSearchOption] = useState("IDTRA");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([{}]); // Inicializar con un objeto vacío
  const [timelineData, setTimelineData] = useState([{}]); // Inicializar con un objeto vacío
  const [open, setOpen] = useState(true);

  const handleSearch = () => {
    const results = data.filter((item) =>
      item[searchOption].toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const fetchTimelineData = () => {
    // Lógica para obtener datos del timeline (adaptar según tu lógica)
    const timeline = [
      {
        label: "Lorem ipsum dolor sit amet",
        date: "12 May 2013",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis voluptate excepturi rem veritatis eum aliquam qui laborum non ipsam ullam tempore reprehenderit illum eligendi cumque mollitia temporibus! Natus dicta qui est optio rerum.",
      },
      // Agrega más eventos según tu lógica
    ]; // Obtén tus datos reales aquí
    setTimelineData(timeline);
  };

  useEffect(() => {
    fetchTimelineData();
  }, []); // Se ejecuta solo al montar el componente

  const handleCloseModal = () => {
    setSearchResults([{}]); // Restablecer a un objeto vacío al cerrar el modal
    setTimelineData([{}]); // Restablecer a un objeto vacío al cerrar el modal
    setOpen(false);
    handleClose();
  };

  return (
    <Dialog open={open} handler={handleCloseModal} className="bg-[#f5f5f5]">
      <DialogBody className="space-y-4">
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div>
            <label
              htmlFor="searchOption"
              className="block text-sm font-medium text-gray-700"
            >
              Elige una opción de búsqueda
            </label>
            <select
              id="searchOption"
              name="searchOption"
              value={searchOption}
              onChange={(e) => setSearchOption(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="IDTRA">IDTRA</option>
              <option value="#CONTENEDOR">#CONTENEDOR</option>
              <option value="BCF">BCF</option>
              <option value="PO">PO</option>
            </select>
          </div>

          <input
            type="text"
            name="search"
            id="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="Agrega el dato"
          />

          <button
            type="submit"
            onClick={handleSearch}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Buscar
          </button>
        </div>

        <div>
          {searchResults.map((result, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">IDTRA:</p>
              <p>{result.idtra}</p>
              <p className="font-bold">BL:</p>
              <p>{result.bl}</p>
              <p className="font-bold">#CONTENEDOR:</p>
              <p>{result.bl}</p>
              <p className="font-bold">STATUS:</p>
              <p>{result.bl}</p>
              <p className="font-bold">FECHA MODIFICACIÓN:</p>
              <p>{result.bl}</p>
              <p className="font-bold">ORIGEN:</p>
              <p>{result.bl}</p>
              <p className="font-bold">DESTINO:</p>
              <p>{result.bl}</p>
              <p className="font-bold">TRANSPORTE:</p>
              <p>{result.bl}</p>

              <ul id="timeline" className="list-none">
                {timelineData.map((event, index) => (
                  <li key={index} className="work">
                    <input
                      className="radio"
                      type="radio"
                      id={`work${index}`}
                      name="works"
                      checked={index === 0}
                    />
                    <div className="relative">
                      <label htmlFor={`work${index}`}>{event.label}</label>
                      <span className="date">{event.date}</span>
                      <span className="circle"></span>
                    </div>
                    <div className="content">
                      <p>{event.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          {timelineData.map((event) => (
            <div key={event.id}>
              <p>{event.label}</p>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default TrackingForm;
