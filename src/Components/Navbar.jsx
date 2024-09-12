const Navbar = () => {
  return (
    <>
      <div className="mainbox 1440px w-full   bg-[#009444] text-white  space-x-11  ">
        <div className="flex justify-around items-center space-x-11 max-h-[75px] h-[40px]">
          <div className="logobox max-w-[250px] ">
            <img src="Agri Shakti.png" className="h-[20px]" />
          </div>
          <div className="additionalbox max-w-[300px] w-[40%] ">
            <ul className="flex w-full justify-around text-xs">
              <li>HOME</li>
              <li>SERVICES</li>
              <li>LEARNING HUB</li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
