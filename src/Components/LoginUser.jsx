import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const LoginUser = () => {
  const maildata = useRef();
  const password = useRef();
  // const Navgiteto = useNavigate();
  // // console.log("I am called");
  const [responseVal, setResponseVal] = useState(null);

  return (
    <>
      <div className="loginbox mt-[100px]">
        <div className="login active-popup ">
          <div className="wrapper loginlogin ">
            <i className="closeicon fa-solid fa-xmark bg-[#31B099]"></i>
            <h3 className="loginheading">Login</h3>

            <div className="Emailbox">
              <i className="fa-solid fa-envelope"></i>

              <input type="text" required ref={maildata} />
              <label htmlFor="email">Email</label>
            </div>
            <div className="Emailbox">
              <i className="fa-solid fa-lock"></i>
              <input type="password" required ref={password} />
              <label htmlFor="password">Password</label>
            </div>

            <Link to={"/"}>
              <button
                type="submit"
                className="submitbtn bg-[#31B099] w-[300px] h-[50px]"
              >
                {" "}
                {/* <button type="submit" className="submitbtn"> */}
                Login
              </button>
            </Link>
            <div className="newregister">
              <p>
                Don't have an account?
                <a href="">Register</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
