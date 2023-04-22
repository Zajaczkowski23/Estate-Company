import Starter from "./Starter";
import Experience from "./Experience";
import Services from "./Services";
import Deals from "./Deals";
import Reviews from "./Reviews";
import Contact from "./Contact";
import Footer from "./Footer";
import BuildingDetail from "./BuildingDetail";

const Home = () => {
  return (
    <div className="App overflow-x-hidden bg-lightGray">
      <Starter />
      <div className="max-w-[1150px] mx-auto">
        <Experience />
        <Services />
        <Deals />
        <Reviews />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
