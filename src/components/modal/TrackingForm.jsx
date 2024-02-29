import React, { useState, useEffect } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import { useFetch } from "../hooks/useFetch";
import poeMapping from "../json/poe.json";

const TrackingForm = ({ handleClose }) => {
  const [searchOption, setSearchOption] = useState("IDTRA");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([{}]);
  const [timelineData, setTimelineData] = useState([{}]);
  const [open, setOpen] = useState(true);
  const apiUrl = `http://localhost:5218/api/TrackingNoLogin/${searchOption}?${searchOption}=${searchText}`;
  const { data, error, loading } = useFetch(apiUrl); // Use useFetch hook with apiUrl

  const handleSearch = async () => {
    try {
      setSearchResults(data.data.value || []); // Actualiza aquí
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "es-ES",
      options
    );
    return formattedDate;
  };

  const getPoeName = (poe) => {
    return poeMapping[poe] || "";
  };

  const fetchTimelineData = (searchResults1) => {
    console.log(searchResults);
    var timeline = [];

    searchResults.map(
      (result, index) =>
        (timeline = [
          {
            date: "ETD",
            label: `ETD: ${formatDate(result.new_etd1) || ""}`,
            description: `POL: ${result.new_pol || ""}`,
          },
          {
            date: "Confirmación Zarpe",
            label: `BUQUE: ${result.new_nombrebuque || ""}`,
            description: `ZARPE: ${
              formatDate(result.new_confirmacinzarpe) || ""
            }`,
          },
          {
            date: "Notif. Aviso Arribo",
            label: `ARRIBO: ${formatDate(result.new_ingresoabodegas) || ""}`,
          },
          {
            date: "ETA",
            label: `ETA: ${formatDate(result.new_eta) || ""}`,
            description: `POE: ${getPoeName(result.new_poe) || ""}`,
          },
          {
            date: "ENTREGA",
            label: `ENTREGA: ${formatDate(result.new_instcliente) || ""}`,
          },
        ])
    );

    setTimelineData(timeline);
  };

  useEffect(() => {
    fetchTimelineData(searchResults);
  }, [searchResults]);

  const handleCloseModal = () => {
    setSearchResults([{}]);
    setTimelineData([{}]);
    setOpen(false);
    handleClose();
  };

  return (
    <Dialog open={open} handler={handleCloseModal} className="bg-[#f5f5f5]">
      <DialogBody className="space-y-4 overflow-auto max-h-[400px]">
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col space-y-4">
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

          <div className="md:w-1/3">
            <input
              type="text"
              name="search"
              id="search"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="block w-full rounded-md sm:text-lg"
              placeholder="Agrega el dato"
            />
          </div>

          <button
            type="submit"
            onClick={handleSearch}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#e21c21] hover:bg-[#ff1f1f] focus:outline-none"
          >
            Buscar
          </button>
        </div>

        <div>
          {searchResults.map((result, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">IDTRA:</p>
              <p>{result.title}</p>
              <p className="font-bold">BL:</p>
              <p>{result.new_bcf}</p>
              <p className="font-bold">#CONTENEDOR:</p>
              <p>{result.new_contenedor}</p>
              <p className="font-bold">STATUS:</p>
              <p>{result.new_preestado2}</p>
              <p className="font-bold">FECHA MODIFICACIÓN:</p>
              <p>{formatDate(result.modifiedon)}</p>
              <p className="font-bold">ORIGEN:</p>
              <p>{result.new_origen}</p>
              <p className="font-bold">DESTINO:</p>
              <p>{result.new_destino}</p>
              <p className="font-bold">TRANSPORTE:</p>
              <p>{result.new_transporte}</p>

              <Timeline>
                {timelineData.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent color="textSecondary">
                      {event.date}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography>{event.label}</Typography>
                      <Typography>{event.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </div>
          ))}
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default TrackingForm;
