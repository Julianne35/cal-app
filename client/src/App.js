import React from "react";
import "./App.css";
import UserLogin from "./Components/Login/UserLogin";
import Register from "./Components/Login/Register";
import LoginStatus from "./Components/Login/LoginStatus";
import CalanderMenu from "./Components/Menu/CalanderMenu";
import Review from "./Components/Review/Review";
import CreateEvent from "./Components/Create/CreateEvent";
import Update from "./Components/Update/Update";
import SelectUpdate from "./Components/Update/SelectUpdate";
import SelectResults from "./Components/Update/SelectResults";
import { CreateEventProvider } from "./Components/Context/ReviewEventContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //HEROKU

  return (
    <>
      <CreateEventProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<UserLogin />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/success" element={<LoginStatus />} />
            <Route exact path="/calmenu" element={<CalanderMenu />} />
            <Route exact path="/create" element={<CreateEvent />} />
            <Route
              exact
              path="/review/:event/:contactname/:contactphone/:contactemail/:street/:city/:state/:zipcode/"
              element={<Review />}
            />
            <Route exact path="/test" element={<Update />} />
            <Route exact path="/selectupdate" element={<SelectUpdate />} />
            <Route exact path="/selectresults/:calId" element={<SelectResults />} />
          </Routes>
        </BrowserRouter>
      </CreateEventProvider>
    </>
  );
}

export default App;
