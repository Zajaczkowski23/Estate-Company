import Content from "./Content";
import Navbar from "./Navbar";
import { Link } from "react-scroll";
const Starter = () => {
  return (
    <div
      className="bg-landingImage h-[80vh] sm:h-[95vh] bg-no-repeat w-screen bg-cover bg-center relative object-cover "
      id="content"
    >
      <Navbar />
      <Content />
      <Link
        to="deals"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className="bg-white sm:py-5 sm:px-4 py-3 px-2 rounded-full text-gray font-bold text-sm sm:text-base
      absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] shadow-md hover:scale-105 transition-all cursor-pointer animate-fade
      "
      >
        Show More
      </Link>
    </div>
  );
};

export default Starter;
