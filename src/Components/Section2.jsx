import { FaArrowAltCircleRight } from "react-icons/fa";

const Section2 = () => {
  return (
    <>
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <div className="imgbox max-h-[540px] h-[540px] flex items-center justify-center">
          <img src="Cricle BG.png" className="rounded-full w-[90%]  " />
        </div>
        <div className="detailsbox h-[540px] max-h-[540px] flex flex-col w-[540px] mt-[100px] justify-start gap-[20px] ml-11">
          <div className="headingsmall text-[#CBD973] text-[14px]">
            what we do best
          </div>
          <div className="head text-[#18191F] text-[40px] font-extrabold">
            Real-Time Alerts
          </div>
          <div className="des max-w-[450px] text-[18px] h-auto">
            Receive timely alerts for weather changes, disease risks, and
            fertilizer application reminders directly on your device. Stay
            informed and take immediate action to safeguard your crops and
            optimize your farming practices.
          </div>
          <div className="get text-[#307560]">
            Get started{" "}
            <FaArrowAltCircleRight className="inline h-[25px] w-[30px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
