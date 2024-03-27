import React from "react";

const AlternateImageText = ({ title, content }) => {
  const createMarkup = () => {
    return { __html: content };
  };

  const createMarkupTitle = () => {
    return { __html: title };
  };

  return (
    <div className="flex flex-col items-center mb-10">
      <div
        className="w-full p-4"
        style={{ fontFamily: "'fuente', sans-serif" }}
      >
        <h2
          className="text-black text-xl font-bold text-center mb-1"
          style={{ fontFamily: "'fuente', sans-serif" }}
        >
          <div dangerouslySetInnerHTML={createMarkupTitle()} />
        </h2>
        <p className="text-left text-black text-lg font-normal">
          <div dangerouslySetInnerHTML={createMarkup()} />
        </p>
      </div>
    </div>
  );
};

export default AlternateImageText;
