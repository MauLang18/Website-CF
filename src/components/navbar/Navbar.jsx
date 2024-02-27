import React, { useState, useEffect } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleAlert = (url) => {
    window.open(url, "_blank");
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavbarFixed(true);
    } else {
      setNavbarFixed(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const navbarHeight = 69;

    if (sectionId) {
      const section = document.getElementById(sectionId);
      const sectionPosition = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
      setSelectedOption(sectionId);
      setShowMenu(false);
    }
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const user = JSON.parse(localStorage.getItem("users"));

  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  const mobileMenuStyles = showMenu
    ? "top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50"
    : "hidden";

  const extractValue = (data) => {
    if (data && data.data && data.data.valor) {
      return data.data.valor;
    } else if (data && data.Valor) {
      return data.Valor;
    } else {
      return "";
    }
  };

  return (
    <>
      <div
        className={`md:hidden flex flex-col items-center ${
          navbarFixed
            ? "fixed top-0 left-0 right-0 bg-[#eeeff2] shadow-md w-full transition-transform transform translate-y-0"
            : "relative bg-[#eeeff2] w-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="flex items-center justify-between w-full p-4">
          {/* Coloca el logo en el lado izquierdo */}
          <Link to={"/"}>
            <img
              src="../img/logo.png"
              alt="Logo"
              className="w-[150px] h-[100px]"
            />
          </Link>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl p-2"
          >
            {showMenu ? (
              <RiCloseLine className="text-black" />
            ) : (
              <RiMenu3Fill className="text-black" />
            )}
          </button>
        </div>
        {showMenu && (
          <nav
            className={`bg-[#eeeff2] text-black ${mobileMenuStyles} flex-1 mb-10`}
          >
            {/* Coloca el login dentro del menú */}
            {user ? (
              <div
                className="cursor-pointer"
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                Logout
              </div>
            ) : (
              <Link to={"/login"} onClick={closeMenu}>
                Registrarse / Iniciar sesión
              </Link>
            )}
            <Link
              to={"/allproduct"}
              onClick={() => scrollToSection("nosotros")}
              className={`${selectedOption === "nosotros" ? "underline" : ""}`}
              style={{ fontFamily: "'fuente', sans-serif" }}
            >
              Logística Internacional
            </Link>
            <Link
              to={"/allproduct"}
              onClick={() => scrollToSection("servicios")}
              className={`${selectedOption === "servicios" ? "underline" : ""}`}
              style={{ fontFamily: "'fuente', sans-serif" }}
            >
              Agenciamiento Aduanal
            </Link>
            <Link
              to={"/allproduct"}
              onClick={() => scrollToSection("contacto")}
              className={`${selectedOption === "contacto" ? "underline" : ""}`}
              style={{ fontFamily: "'fuente', sans-serif" }}
            >
              Almacenaje Fiscal-General
            </Link>
            <Link
              to={"/allproduct"}
              onClick={() => scrollToSection("envio")}
              className={`${selectedOption === "envio" ? "underline" : ""}`}
              style={{ fontFamily: "'fuente', sans-serif" }}
            >
              Transporte Local de Carga
            </Link>
          </nav>
        )}
      </div>

      <nav
        className={`hidden md:flex justify-center ${
          navbarFixed
            ? "fixed top-0 left-0 right-0 bg-[#eeeff2] shadow-md w-full transition-transform transform translate-y-0"
            : "relative bg-[#eeeff2] w-full"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="w-[1300px] h-[69px] flex items-center justify-start gap-8 ml-[60px]">
          {/* Logo en el lado izquierdo */}
          <Link to={"/"}>
            <img
              src="../img/logo.png"
              alt="Logo"
              className="w-[150px] h-[100px]"
            />
          </Link>
          {/* Resto de los enlaces */}
          <Link
            to={"/allproduct"}
            className={`${
              selectedOption === "nosotros" ? "underline" : ""
            } text-black text-lg font-medium transition-colors hover:underline`}
            style={{ fontFamily: "'fuente', sans-serif" }}
            onClick={() => scrollToSection("nosotros")}
          >
            Logística Internacional
          </Link>
          <Link
            to={"/allproduct"}
            className={`${
              selectedOption === "servicios" ? "underline" : ""
            } text-black text-lg font-medium transition-colors hover:underline`}
            style={{ fontFamily: "'fuente', sans-serif" }}
            onClick={() => scrollToSection("servicios")}
          >
            Agenciamiento Aduanal
          </Link>
          <Link
            to={"/allproduct"}
            className={`${
              selectedOption === "contacto" ? "underline" : ""
            } text-black text-lg font-medium transition-colors hover:underline`}
            style={{ fontFamily: "'fuente', sans-serif" }}
            onClick={() => scrollToSection("contacto")}
          >
            Almacenaje Fiscal-General
          </Link>
          <Link
            to={"/allproduct"}
            className={`${
              selectedOption === "envio" ? "underline" : ""
            } text-black text-lg font-medium transition-colors hover:underline`}
            style={{ fontFamily: "'fuente', sans-serif" }}
            onClick={() => scrollToSection("envio")}
          >
            Transporte Local de Carga
          </Link>
        </div>
        <div
          className="w-[350px] h-[54px] flex items-center justify-center text-center text-black text-lg font-medium my-auto lg:mr-[-20px] mr-[0px]"
          style={{ fontFamily: "'fuente', sans-serif" }}
        >
          {/* Login */}
          {!user && (
            <div>
              <Link to={"/login"} onClick={closeMenu}>
                <img src="../on-off.png" alt="Icono" className="w-6 h-6" />
              </Link>
            </div>
          )}
        </div>
        <div className="xl:flex xl:items-center xl:justify-center lg:mr-[70px] my-auto">
          {user && (
            <div className={`lg:hidden ${showMenu ? "block" : "hidden"}`}>
              {user.role === "user" && (
                <div>
                  <Link to={"/user-dashboard"} onClick={closeMenu}>
                    User
                  </Link>
                </div>
              )}
              {user.role === "admin" && (
                <div>
                  <Link to={"/admin-dashboard"} onClick={closeMenu}>
                    Admin
                  </Link>
                </div>
              )}
              <div
                className="cursor-pointer"
                onClick={() => {
                  closeMenu();
                  logout();
                }}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
