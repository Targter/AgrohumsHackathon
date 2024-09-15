import "./App.css";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";
import Navbar from "./Components/Navbar";
import RegisterUser from "./Components/RegisterUser";
import LoginUser from "./Components/LoginUser";
import LocationMap from "./Page/Page3";
import Page3 from "./Page/Page3";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Page1 />} /> {/* Default route to Home */}
        <Route path="/Home" element={<Page1 />} /> {/* Home page */}
        {/* <Route path="/GeneratePage" element={<Page2 />} /> Generate page */}
        <Route path="/Login" element={<LoginUser />} /> {/* Login page */}
        <Route path="/singup" element={<RegisterUser />} /> {/* Signup page */}
        <Route path="/GeneratePage" element={<Page3 />} /> {/* Page with map */}
      </Routes>
    </Router>
  );
}

export default App;

// temprature
// humitdity:
