import Building from "./Building";
import { useState } from "react";
import { Link } from "react-router-dom";
import buildingData from "../data/buildingData.json";
const Deals = () => {
  const [choice, setChoice] = useState("House");

  const changeItem = (item) => {
    setChoice(item);
  };

  const options = [
    { option: "House", id: 1 },
    { option: "Appartament", id: 2 },
    { option: "Office", id: 3 },
  ];

  return (
    <div className="flex flex-col items-center" id="deals">
      <h2 className="text-grayBlue sm:text-4xl font-bold sm:py-[65px] py-[20px] text-center px-4 text-3xl">
        Our Best Deals for Today
      </h2>
      <p className="max-w-[700px] text-center text-grayBlue-70 sm:text-base text-sm font-medium px-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        deserunt quidem excepturi unde quam eaque sapiente ea, labore in
        perferendis.
      </p>
      <div className="flex flex-col sm:flex-row text-center sm:py-[60px] py-[30px]">
        {options.map((option) => {
          return (
            <div
              className=" sm:ml-[65px] text-grayBlue-70 font-bold cursor-pointer hover:text-grayBlue transition-colors"
              onClick={() => changeItem(option.option)}
              key={option.id}
            >
              {option.option}
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-wrap text-center mx-auto justify-evenly">
        {buildingData.map((building) => {
          if (choice === "House" && building.type === "House") {
            return (
              <Link
                to={{
                  pathname: `/${building.id}`,
                  state: {
                    image: building.image,
                    name: building.name,
                    price: building.price,
                    address: building.address,
                    beds: building.beds,
                    sqft: building.sqft,
                  },
                }}
                key={building.id}
              >
                <Building
                  image={building.image}
                  name={building.name}
                  price={building.price}
                  address={building.address}
                  beds={building.beds}
                  sqft={building.sqft}
                />
              </Link>
            );
          } else if (
            choice === "Appartament" &&
            building.type === "Appartament"
          ) {
            return (
              <Link
                to={{
                  pathname: `/${building.id}`,
                  state: {
                    image: building.image,
                    name: building.name,
                    price: building.price,
                    address: building.address,
                    beds: building.beds,
                    sqft: building.sqft,
                  },
                }}
                key={building.id}
              >
                <Building
                  key={building.id}
                  image={building.image}
                  name={building.name}
                  price={building.price}
                  address={building.address}
                  beds={building.beds}
                  sqft={building.sqft}
                />
              </Link>
            );
          } else if (choice === "Office" && building.type === "Office") {
            return (
              <Link
                to={{
                  pathname: `/${building.id}`,
                  state: {
                    image: building.image,
                    name: building.name,
                    price: building.price,
                    address: building.address,
                    beds: building.beds,
                    sqft: building.sqft,
                  },
                }}
                key={building.id}
              >
                <Building
                  key={building.id}
                  image={building.image}
                  name={building.name}
                  price={building.price}
                  address={building.address}
                  beds={building.beds}
                  sqft={building.sqft}
                />
              </Link>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default Deals;
