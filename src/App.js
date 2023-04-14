import {Route, Routes} from "react-router-dom";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import HouseDetails from "./components/HouseDetails";

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="contact" element={<Contact />} />
    <Route path="housedetails/:id" element={<HouseDetails />} />
    <Route path="about" element={<About />} />
    <Route path='login' element={<Login />} />
    <Route path="signUp" element={<SignUp />} />
    </Routes>
    </div>
  );
}

export default App;
