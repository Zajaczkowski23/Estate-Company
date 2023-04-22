const Building = ({ image, name, price, address, beds, bath, sqft, id }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden mb-[25px] shadow-sm cursor-pointer hover:scale-105 transition-all mx-auto text-start">
      <img
        src={image}
        alt="picture of the house on sale"
        className="w-[350px] h-[190px] object-cover"
      />
      <div className="p-[30px]">
        <div className="text-grayBlue font-bold text-[15px]">{name}</div>
        <div className="text-grayBlue font-bold mt-[10px] mb-[20px] text-[17px]">
          $ {price}
        </div>
        <div className="text-grayBlue-80 text-[13px] mb-[15px]">{address}</div>
        <div className="flex ">
          {beds > 0 && (
            <div className="text-grayBlue-80 mr-2 text-[13px]">{beds} Beds</div>
          )}
          {bath > 0 && (
            <div className="text-grayBlue-80 mr-2 text-[13px]">
              {bath} Baths
            </div>
          )}
          <div className="text-grayBlue-80 text-[13px]">{sqft} sqft</div>
        </div>
      </div>
    </div>
  );
};

export default Building;
