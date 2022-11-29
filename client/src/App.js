import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserLogin from "./Components/Login/UserLogin";
import Register from "./Components/Login/Register";
import LoginStatus from "./Components/Login/LoginStatus";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserLogin/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/success" element={<LoginStatus/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
