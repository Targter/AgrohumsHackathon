import Section3Card from "./Section3card";
const Section3 = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#307560] section3 flex items-center justify-center ">
        <div className="flex flex-col w-[1050px]">
          <div className="Speak text-[48px] font-extrabold text-white">
            Our Farmers speak
          </div>
          <div className="boxes mt-8   flex gap-5">
            <Section3Card></Section3Card>
            <Section3Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
