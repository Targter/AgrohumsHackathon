import { FaArrowAltCircleRight } from "react-icons/fa";

const Sec1Card = () => {
  return (
    <>
      <div className="w-[330px] h-[380px] bg-white flex flex-col justify-around p-9 rounded-3xl">
        <div className="imgbox w-[250px] h-[125px] bg-gray-200 rounded-md"></div>
        <div className="h1 text-[18px] font-semibold ">WEATHER MONITORING</div>
        <div className="h2 text-[#49A760] text-[14px]">core service</div>
        <div className="des w-[230px] h-auto text-[12px] font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cum.
        </div>
        <button className="flex justify-start mt-2">
          <FaArrowAltCircleRight className="w-8 h-6 text-start " />
        </button>
      </div>
    </>
  );
};

export default Sec1Card;
