// import "./App.css";
import Navbar from "../Components/Navbar";
import LandingPage from "../Components/LandingPage";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
const Page1 = () => {
  return (
    <>
      <div>
        <Navbar />
        <LandingPage />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
};

export default Page1;
