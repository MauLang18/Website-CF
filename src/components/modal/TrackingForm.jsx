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

const TrackingForm = ({ data, handleClose }) => {
  const [searchOption, setSearchOption] = useState("IDTRA");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([{}]);
  const [timelineData, setTimelineData] = useState([{}]);
  const [open, setOpen] = useState(true);

  const handleSearch = () => {
    const results = data.filter((item) =>
      item[searchOption].toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const fetchTimelineData = () => {
    const timeline = [
      {
        date: "ETD",
        label: "ETD: ",
        description: "POE: ",
      },
      {
        date: "Confirmación Zarpe",
        label: "BUQUE: ",
        description: "ZARPE: ",
      },
      {
        date: "ETD",
        label: "ETD: ",
        description: "POL: ",
      },
      {
        date: "Notif. Aviso Arribo",
        label: "ARRIBO: ",
      },
      {
        date: "ETA",
        label: "ETA: ",
        description: "POE: ",
      },
      {
        date: "ENTREGA",
        label: "ENTREGA: ",
      },
    ];
    setTimelineData(timeline);
  };

  useEffect(() => {
    fetchTimelineData();
  }, []);

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
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md sm:text-lg"
              placeholder="Agrega el dato"
            />
          </div>

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
