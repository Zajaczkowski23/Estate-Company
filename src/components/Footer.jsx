import star from "../assets/star.svg";
import { Link } from "react-scroll";

const Footer = () => {
  const items = [
    { option: "About", to: "about", id: 1 },
    { option: "Services", to: "services", id: 2 },
    { option: "Reviews", to: "reviews", id: 3 },
    { option: "Contacts", to: "contact", id: 4 },
  ];
  return (
    <div className="bg-white">
      <div className="max-w-[1150px] mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-start sm:py-[90px] px-4 py-[45px]">
        <div className="text-2xl text-grayBlue font-bold mb-6 sm:mb-0">
          Company
        </div>
        <ul className="flex flex-col gap-y-2 item">
          {items.map((item) => {
            return (
              <li className="text-grayBlue-70 font-bold text-sm hover:text-grayBlue duration-200 transition cursor-pointer">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.option}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col items-center mt-6 sm:mt-0">
          <div className="flex">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
          <p className="text-grayBlue-70 font-bold">
            4,000 Satisfied Customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
