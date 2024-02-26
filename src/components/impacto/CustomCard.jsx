import React from "react";

const CustomCard = ({ imageSrc, text, title, buttonText, buttonLink, img }) => {
  const formattedTitle = {
    __html: title,
  };

  const formattedText = {
    __html: text,
  };

  return (
    <div className="w-auto p-4">
      <div className="bg-white rounded-lg shadow-lg">
        {img && (
          <div>
            <img
              className="w-full h-40 object-cover rounded-t-lg custom-image"
              src={imageSrc}
              alt="Tutorial Image"
            />
            <div className="p-4 w-auto">
              <div
                className="text-black text-md font-bold text-center mb-2"
                style={{ fontFamily: "'fuente', sans-serif" }}
                dangerouslySetInnerHTML={formattedTitle}
              ></div>
              <div
                className="text-black text-md font-bold text-center mb-2"
                style={{ fontFamily: "'fuente', sans-serif" }}
                dangerouslySetInnerHTML={formattedText}
              ></div>
            </div>
          </div>
        )}
        {!img && (
          <div className="p-4 w-auto">
            <div
              className="text-black text-md font-bold text-center mb-2"
              style={{ fontFamily: "'fuente', sans-serif" }}
              dangerouslySetInnerHTML={formattedTitle}
            ></div>
            <div
              className="text-black text-md font-bold text-center mb-2"
              style={{ fontFamily: "'fuente', sans-serif" }}
              dangerouslySetInnerHTML={formattedText}
            ></div>
          </div>
        )}
        <div className="text-center">
          <p className="text-black text-2xl font-bold">{buttonText}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
