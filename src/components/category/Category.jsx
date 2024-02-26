import { useNavigate } from "react-router";

// category
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4695/4695562.png",
    name: "Logistica Internacional",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/2760/2760975.png",
    name: "Agenciamiento Aduanal",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/1350/1350237.png",
    name: "Almacenaje Fiscal-General",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/147/147028.png",
    name: "Transporte Local de Carga ",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12113/12113850.png",
    name: "Asesorias y Capacitaciones",
  },
];

const Category = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col mt-5">
        {/* Encabezado "Servicios" */}
        <div className="">
          <h1 className=" text-center mb-5 text-2xl font-semibold">
            Servicios
          </h1>
        </div>

        {/* Contenedor ajustado */}
        <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
          <div className="flex space-x-2 lg:space-x-4">
            {category.map((item, index) => (
              <div key={index} className="lg:px-2 text-center">
                <div
                  onClick={() => navigate(`/category/${item.name}`)}
                  className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-[#e21c21] transition-all hover:bg-[#ff1f1f] cursor-pointer mb-1"
                >
                  <div className="flex justify-center mb-12">
                    <img src={item.image} alt="img" />
                  </div>
                </div>
                <h1 className="text-sm lg:text-lg font-medium title-font first-letter:uppercase">
                  <div className="flex flex-col">
                    {item.name.split(" ").map((word, i) => (
                      <span key={i}>{word}</span>
                    ))}
                  </div>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* style */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n",
        }}
      />
    </div>
  );
};

export default Category;
