import React, { useState } from "react";
import { Link } from "react-scroll";
import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = [
    { option: "About", to: "about", id: 1 },
    { option: "Services", to: "services", id: 2 },
    { option: "Reviews", to: "reviews", id: 3 },
    { option: "Contacts", to: "contact", id: 4 },
  ];
  return (
    <div className="container animate-fade sm:relative z-10 sm:bg-inherit w-full mx-auto fixed">
      <div className="flex justify-between items-end bg-white py-6 sm:py-10 sm:bg-inherit">
        <Link
          to="content"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          className="font-bold text-4xl cursor-pointer flex items-center sm:text-white mr-auto px-4"
        >
          Company
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="sm:hidden absolute z-10 right-8 top-6 cursor-pointer"
        >
          <img src={open ? Close : Menu} alt="Menu icon" aria-label="menu" />
        </div>
        <ul
          className={`flex items-center bg-white sm:bg-inherit flex-col sm:flex-row sm:h-auto absolute sm:z-10 z-[-1] sm:static w-full sm:w-auto transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {items.map((item) => {
            return (
              <li className="sm:mr-14 mb-7 mt-10 sm:mb-0 sm:mt-0">
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="sm:text-white font-bold group transition duration-300 cursor-pointer text-xl sm:text-base"
                >
                  {item.option}
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[2.5px] bg-orange rounded-full"></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
