import axios from "axios";
import { useRef } from "react";
const RegisterUser = () => {
  const userdata = useRef();
  const maildata = useRef();
  const password = useRef();

  return (
    <>
      <div className="loginbox mt-[100px]">
        <div className="login active-popup active">
          <div className="wrapper registration">
            <i className="closeicon1 fa-solid fa-xmark bg-[#31B099]"></i>
            <h3 className="loginheading">Registration</h3>

            <div className="Emailbox">
              <i className="fa-solid fa-user"></i>

              <input type="text" required ref={userdata} />
              <label htmlFor="email">Username</label>
            </div>
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

            <button type="submit" className="submitbtn bg-[#31B099]">
              {/* <button type="submit" className="submitbtn"> */}
              Register
            </button>
            <div className="newregister">
              <p>
                Already have an account <a href="">Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
