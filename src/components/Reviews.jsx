import face from "../assets/face.png";
import face2 from "../assets/face2.png";
import face3 from "../assets/face3.png";
import face4 from "../assets/face4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import Review from "./Review";

const Reviews = () => {
  return (
    <div className="py-[45px] flex flex-col items-center" id="reviews">
      <h2 className="text-grayBlue sm:text-4xl font-bold sm:py-[65px] py-[20px] text-center px-4 text-3xl">
        Reviews from Our Customers
      </h2>
      <p className="max-w-[700px] text-center text-grayBlue-70 sm:text-base text-sm font-medium px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint
        aut, eius tempore dolorem amet quod modi, dicta, temporibus saepe itaque
        labore!
      </p>
      <div className="max-w-[550px] overflow-hidden cursor-pointer mt-10">
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          className="swiper_container"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          effect="fade"
        >
          <SwiperSlide className="">
            <Review
              avatar={face}
              name={"Maxwell Stephens"}
              address={"New York, USA"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              avatar={face2}
              name={"Fred Kemp"}
              address={"Warsaw, Poland"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              avatar={face3}
              name={"Marnie Wagner"}
              address={"Poznan, Poland"}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Review
              avatar={face4}
              name={"Antonio Clements"}
              address={"Krakow, Poland"}
            />
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Reviews;
