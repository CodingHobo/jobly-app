import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.css';
import userContext from "./userContext";

/** Compiles Jobly App */
function App() {
  const [ token, setToken ] = useState("");
  const [currUser, setCurrUser] = useState(null);

  /** useEffect to check state of token
   * if token, use jwt-decode and set state for currUser to decoded payload
   */
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation currUser={currUser}/>
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
