import Category from "../../components/category/Category";
import ContactForm from "../../components/contact/ContactForm";
import DataComponent from "../../components/datos/DataComponent";
import HeroSection from "../../components/heroSection/HeroSection";
import Mas from "../../components/impacto/Mas";
import Layout from "../../components/layout/Layout";
import Nosotros from "../../components/nosotros/Nosotros";
import Track from "../../components/track/Track";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <Track />
      <Nosotros />
      <DataComponent />
      <Mas />
      <ContactForm />
    </Layout>
  );
};

export default HomePage;
