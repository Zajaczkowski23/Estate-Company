import House from "../assets/House.svg";
import Office from "../assets/Office.svg";
import Appartament from "../assets/Appartament.svg";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div className="py-[45px] flex flex-col items-center" id="services">
      <h2 className="text-grayBlue sm:text-4xl font-bold sm:py-[65px] py-[20px] text-center px-4 text-3xl">
        Services for Maximum Efficiency
      </h2>
      <p className="max-w-[700px] text-center text-grayBlue-70 sm:text-base text-sm font-medium px-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio quae
        asperiores velit nostrum adipisci ipsum hic, incidunt aperiam reiciendis
        sequi.
      </p>
      <div
        className="flex items-center pt-[60px] sm:flex-row flex-col text-center"
        ref={ref}
      >
        {inView && (
          <div className="flex flex-col text-center sm:mr-[60px] animate-fadeIn">
            <div className="p-10 bg-white rounded-full sm:mb-10 mb-4">
              <img src={House} alt="Our House icon" />
            </div>
            <p className="text-grayBlue font-bold mb-2 sm:mb-0">House</p>
          </div>
        )}
        {inView && (
          <div className="flex flex-col text-center sm:mr-[60px] animate-fadeIn">
            <div className="p-10 bg-white rounded-full sm:mb-10 mb-4">
              <img src={Appartament} alt="Our Appartament icon" />
            </div>
            <p className="text-grayBlue font-bold mb-2 sm:mb-0">Appartament</p>
          </div>
        )}
        {inView && (
          <div className="flex flex-col text-center animate-fadeIn ">
            <div className="p-10 bg-white rounded-full sm:mb-10 mb-4">
              <img src={Office} alt="Our Office icon" />
            </div>
            <p className="text-grayBlue font-bold mb-2 sm:mb-0">Office</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
