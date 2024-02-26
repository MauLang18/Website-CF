import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  const navigate = useNavigate();

  // logout function
  const logout = () => {
    localStorage.clear("users");
    navigate("/login");
  };

  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-black font-medium text-md px-5 ">
      <li>
        <Link to={"/allproduct"}>Logistica Internacional</Link>
      </li>
      <li>
        <Link to={"/allproduct"}>Agenciamiento Aduanal</Link>
      </li>
      <li>
        <Link to={"/allproduct"}>Almacenaje Fiscal-General</Link>
      </li>
      <li>
        <Link to={"/allproduct"}>Transporte Local de Carga</Link>
      </li>

      {/* User */}
      {user?.role === "user" && (
        <li>
          <Link to={"/user-dashboard"}>User</Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li>
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      )}

      {/* logout */}
      {user && (
        <li className="cursor-pointer" onClick={logout}>
          logout
        </li>
      )}
    </ul>
  );

  return (
    <nav className="bg-[#eeeff2] sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            {/* Cambiado de texto a imagen */}
            <img src="img/logo.webp" alt="Logo" className="h-12" />
          </Link>
        </div>

        {/* right  */}
        <div className="center flex justify-center mb-4 lg:mb-0 space-x-3">
          {navList}
        </div>

        {/* Registrarse y Login */}
        <div className="right flex space-x-3">
          {/* Signup */}
          {!user && (
            <div>
              <Link to={"/signup"}>Registrarse</Link>
            </div>
          )}

          {/* Login */}
          {!user && (
            <div>
              <Link to={"/login"}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
