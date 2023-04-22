import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import buildingData from "../data/buildingData.json";
import { Link } from "react-router-dom";

const BuildingDetail = () => {
  const { id } = useParams();
  const building = buildingData.find((building) => building.id === Number(id));

  return (
    <div className="bg-lightGray h-full animate-fade">
      <Link
        to={"/"}
        className="font-bold text-4xl cursor-pointer flex items-center mr-auto px-4 max-w-[1000px] mx-auto pt-5 hover:text-grayBlue transition-colors"
      >
        Company
      </Link>
      <div
        className="flex flex-col items-center justify-center sm:w-[700px] pt-10 mx-auto "
        id="building-details"
      >
        <img
          src={building.image}
          alt={building.name}
          className="w-full sm:max-h-[480px] max-h-[350px] object-cover rounded shadow-lg"
        />
        <h3 className="text-3xl font-bold my-10 text-grayBlue">
          {building.name}
        </h3>
        <div className="flex sm:flex-row flex-col px-6 pb-6">
          <div className="flex flex-col items-start w-full mr-10">
            <p className="text-grayBlue-70">
              <span className="font-bold text-grayBlue mr-2">Price:</span>
              {building.price}
            </p>
            <p className="text-grayBlue-70">
              <span className="font-bold text-grayBlue mr-2">Address:</span>
              {building.address}
            </p>
            <p className="text-grayBlue-70">
              <span className="font-bold text-grayBlue mr-2">Beds:</span>
              {building.beds}
            </p>
            <p className="text-grayBlue-70">
              <span className="font-bold text-grayBlue mr-2">Baths: </span>
              {building.bath}
            </p>
            <p className="text-grayBlue-70">
              <span className="font-bold text-grayBlue mr-2">Sqft:</span>
              {building.sqft}
            </p>
          </div>
          <p className="text-grayBlue-70 font-medium">{building.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BuildingDetail;
