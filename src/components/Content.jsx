import Mail from "../assets/Mail.svg";
import Address from "../assets/Address.svg";
import Phone from "../assets/Phone.svg";

const Content = () => {
  return (
    <div className="flex items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] justify-center flex-col max-w-[1000px] mx-auto text-center animate-fade pt-20 sm:pt-0">
      <h1 className="text-white md:text-[65px] sm:pt-28 pt-4 text-5xl font-bold md:leading-[4rem] text-center">
        Invest on Real Estate with Our Company
      </h1>
      <div className="text-white sm:pt-32 pt-8 flex justify-between w-full flex-col lg:flex-row items-center">
        <div className="flex items-center text-center">
          <img src={Address} alt="Address Icon" className="mr-[2px]" />
          <div className="font-bold">Mickiewicza 22, Warsaw 00-006</div>
        </div>
        <div className="font-bold flex">
          <img src={Phone} alt="Phone Icon" className="mr-[2px]" />
          (123) 456-789
        </div>
        <div className="font-bold flex">
          <img src={Mail} alt="Mail Icon" className="mr-[2px]" />
          company@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Content;
