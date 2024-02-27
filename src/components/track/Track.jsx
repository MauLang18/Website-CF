import React, { useState } from "react";
import TrackingForm from "../modal/TrackingForm"; // Ajusta la ruta según la ubicación real del componente
import { Navigate } from "react-router-dom"; // Ajusta la importación según tu configuración

const Track = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section>
      <div className="container mx-auto px-5 py-10 md:py-14">
        <div className="flex flex-wrap -m-4 text-center">
          {/* Track 1 */}
          <div
            className="p-4 md:w-1/2 sm:w-1/2 w-full cursor-pointer"
            onClick={handleOpenModal}
          >
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg flex items-center justify-center">
              <svg
                width="75px"
                height="75px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                fill="#e21c21"
              >
                <path
                  fill="#e21c21"
                  d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
                ></path>
                <path
                  fill="#e21c21"
                  d="M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
                ></path>
              </svg>

              <div className="ml-4">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Web Tracking
                </h2>
                <p className="leading-relaxed">Rastrear mi carga</p>
              </div>
            </div>
          </div>

          {/* Track 3 */}
          <div
            className="p-4 md:w-1/2 sm:w-1/2 w-full cursor-pointer"
            onClick={handleOpenModal}
          >
            <div className="border-2 hover:shadow-xl hover:shadow-gray-200 border-gray-200 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg flex items-center justify-center">
              <svg
                fill="#e21c21"
                width="75px"
                height="75px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L11.5,3 C11.6326082,3 11.7597852,3.05267842 11.8535534,3.14644661 L20.1564971,11.4493903 C21.2890176,12.5819108 21.2890176,14.4180892 20.1564971,15.5506097 L15.5506097,20.1564971 C14.4180892,21.2890176 12.5819108,21.2890176 11.4493903,20.1564971 L3.14644661,11.8535534 C3.05267842,11.7597852 3,11.6326082 3,11.5 L3,5.5 Z M11.2928932,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,11.2928932 L12.1564971,19.4493903 C12.8984933,20.1913865 14.1015067,20.1913865 14.8435029,19.4493903 L19.4493903,14.8435029 C20.1913865,14.1015067 20.1913865,12.8984933 19.4493903,12.1564971 L11.2928932,4 Z M8,7 C7.44771525,7 7,7.44771525 7,8 C7,8.55228475 7.44771525,9 8,9 C8.55228475,9 9,8.55228475 9,8 C9,7.44771525 8.55228475,7 8,7 Z M8,6 C9.1045695,6 10,6.8954305 10,8 C10,9.1045695 9.1045695,10 8,10 C6.8954305,10 6,9.1045695 6,8 C6,6.8954305 6.8954305,6 8,6 Z"></path>
              </svg>

              <div className="ml-4">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Quote your cargo
                </h2>
                <p className="leading-relaxed">Cotice su carga</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <TrackingForm
            data={{}} // Asegúrate de pasar los datos correctos aquí
            handleClose={handleCloseModal} // Pasa la función de cierre al modal
          />
        </div>
      )}
    </section>
  );
};

export default Track;
