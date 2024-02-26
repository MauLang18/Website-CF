import Footer from "../footer/Footer";
import Header from "../navbar/Header";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main-content min-h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
