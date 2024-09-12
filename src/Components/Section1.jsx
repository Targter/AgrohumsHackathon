import Sec1Card from "./Sec1Card";

const Section1 = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#E9F1EE] sec1 flex items-center justify-center">
        <div className="centerbox w-[990px] max-w-[990px] h-[611px] max-h-[611px]  flex flex-col items-center ">
          <div className="h1 text-[#49A760] ">What we do </div>
          <div className="h2 font-bold text-[45px] ">Services</div>
          <div className="sectioncontainer flex mt-[80px] gap-8">
            <Sec1Card />
            <Sec1Card />
            <Sec1Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
