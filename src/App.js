import React from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from "./Components/auth/Auth/PrivateRoute";
import SignIn from "./Components/auth/SignIn/SignIn";
import SignUp from "./Components/auth/SignUp/SignUp";
import NavBar from "./Components/Navbar/NavBar";
import NoMatch from "./Components/NoMatch/NoMatch";
import SeatBooking from "./Components/SeatBooking/SeatBooking";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Service from "./Pages/Service/Service";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/service">
              <Service />
            </Route>
            <Route path="/seatBooking/:id">
              <SeatBooking />
            </Route>
            <Route exact path="/signIn">
              <SignIn />
            </Route>
            <Route exact path="/signUp">
              <SignUp />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router >
      </UserContext.Provider>
    </>
  );
}

export default App