import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div className="py-[45px] flex flex-col items-center" id="about">
      <h2 className="text-grayBlue sm:text-4xl font-bold sm:py-[65px] py-[20px] text-center px-4 text-3xl">
        We Will Find the Best Option
      </h2>
      <p className="max-w-[700px] text-center text-grayBlue-70 sm:text-base text-sm font-medium px-10 pb-[50px]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        voluptatem enim sunt adipisci vel repudiandae ullam ipsum recusandae
        inventore, dolorum quidem esse omnis similique aspernatur? Quidem
        necessitatibus impedit vitae error?
      </p>
      <div className="xl:flex items-center justify-center" ref={ref}>
        <div className="w-[300px] sm:w-[350px] text-center shadow-lg h-[160px] flex flex-col items-center justify-center mb-4 xl:mr-7 xl:mb-0 rounded-xl bg-white">
          <div className="text-3xl text-grayBlue font-bold">
            {inView && <CountUp end={15} duration={2} />} Years
          </div>
          <div className="text-grayBlue-70 text-md mt-3 font-medium">
            in Business
          </div>
        </div>
        <div className="w-[300px] sm:w-[350px] text-center shadow-lg h-[160px] flex flex-col items-center justify-center mb-4 xl:mr-7 xl:mb-0 rounded-xl bg-white">
          <div className="text-3xl text-grayBlue font-bold">
            ${inView && <CountUp end={100} duration={2} />} Millions
          </div>
          <div className="text-grayBlue-70 text-md mt-3 font-medium">
            Property Brokered
          </div>
        </div>
        <div className="w-[300px] sm:w-[350px] text-center shadow-lg h-[160px] flex flex-col items-center justify-center rounded-xl bg-white">
          <div className="text-3xl text-grayBlue font-bold">
            {inView && <CountUp end={10000} duration={2} />}
          </div>
          <div className="text-grayBlue-70 text-md mt-3 font-medium">
            Transactions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
