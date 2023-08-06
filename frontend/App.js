import Failure from "./components/Failure";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import StripeElement from "./components/StripeElement";
import Success from "./components/Success";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Yearly from "./components/Yearly";
import Monthly from "./components/Monthly";

function App() {
  return (
    <div className=" flex bg-[#1F4D90] h-screen w-screen justify-center items-center">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/success" element={<Success />} />
          <Route exact path="/failure" element={<Failure />} />
          <Route exact path="/payment" element={<StripeElement />} />
          <Route exact path="/monthly" element={<Monthly />} />
          <Route exact path="/yearly" element={<Yearly />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
