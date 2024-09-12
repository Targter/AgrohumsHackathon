import { IoMdArrowDropdown } from "react-icons/io";

const Section3Card = () => {
  return (
    <>
      <div className="w-[540px] h-[310px]  flex flex-col items-center">
        <div className="boxcontainer w-[540px] bg-white p-4 flex flex-col items-center gap-2 rounded-3xl">
          <div className="heading w-[470px] h-[28px] text-center text-[18px] font-medium">
            Incredible Experience
          </div>
          <div className="des w-[470px] h-[90px] text-[14px] ">
            Agri Shakti has transformed the way I manage my crops. The disease
            prediction tool helped me catch an early infestation in my sugarcane
            fields, saving me from a massive loss. I can't imagine farming
            without it now!
          </div>
        </div>
        <span className="relative top-[-15px]  ">
          <IoMdArrowDropdown className="text-4xl text-white" />
        </span>
        <div className="namecontainer w-[540px]  flex justify-center items-center gap-3 text-white">
          <div className="left flex ">
            <img src="Photo.png" className="w-[56px] h-[56px] rounded-full" />
          </div>
          <div className="right flex flex-col">
            <div className="name font-bold text-[20px]">Ramesh Kumar</div>
            <div className="details text-[14px]">--Farmer,Maharasthra</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3Card;
