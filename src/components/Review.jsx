const Review = ({ avatar, name, address }) => {
  return (
    <div className="sm:w-[500px] w-[350px] mb-5 mx-auto">
      <div className="bg-white  rounded-xl shadow-sm">
        <p className="p-[30px] text-grayBlue-70 font-bold text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita iste
          reprehenderit doloribus voluptate nemo odit, tempore sit! Harum,
          perferendis consequatur?
        </p>
      </div>
      <div className="flex items-center p-8">
        <img
          src={avatar}
          alt="face of our customer"
          className="mr-[20px] max-w-[50px] rounded-full"
        />
        <div>
          <div className="text-grayBlue font-bold">{name}</div>
          <div className="text-grayBlue-80 text-[12px] font-bold">
            {address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
