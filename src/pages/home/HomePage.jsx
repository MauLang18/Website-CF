import Category from "../../components/category/Category";
import DataComponent from "../../components/datos/DataComponent";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
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
      {/* <HomePageProductCard /> */}
    </Layout>
  );
};

export default HomePage;
