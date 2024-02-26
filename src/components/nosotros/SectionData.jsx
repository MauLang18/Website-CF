import React from "react";

const SectionData = ({ imageSrc, titles, contents, imageFirst }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row mb-10${
        imageFirst ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div className="lg:w-1/2 lg:ml-10">
        <video className="h-44 lg:h-full" autoPlay loop muted>
          <source src="video2.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
      <div
        className="lg:w-1/2 p-4"
        style={{ fontFamily: "'fuente', sans-serif" }}
      >
        {titles.map((title, index) => (
          <div key={index} className="mb-4">
            <h2
              className="text-black text-xl font-bold text-center mb-2"
              style={{ fontFamily: "'fuente', sans-serif" }}
            >
              {title}
            </h2>
            {index < titles.length - 1 && <hr className="mb-2" />}
            <p className="text-left text-black text-lg font-normal">
              {contents[index]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionData;
