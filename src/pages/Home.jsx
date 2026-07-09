import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import ProductsSection from "../components/home/ProductsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import IndustriesSection from "../components/home/IndustriesSection";
import StatsSection from "../components/home/StatsSection";
import CTASection from "../components/home/CTASection";
import LocateUsSection from "../components/home/LocateUsSection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <WhyChooseUs />
      <IndustriesSection />
      <StatsSection />
      <LocateUsSection />
      <CTASection />
    </>
  );
};

export default Home;
