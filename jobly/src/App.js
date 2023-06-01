import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.css';
import JoblyApi from "./api";
import jwt_decode from "jwt-decode"


import userContext from "./userContext";

/** Compiles Jobly App */
function App() {
  const [ token, setToken ] = useState("");
  const [currUser, setCurrUser] = useState(null);

  /** useEffect to check state of token
   * if token, use jwt-decode and set state for currUser to decode payload
   *
*/

  useEffect(function checkToken() {
    function decodeToken() {
      if (token) {
        const payload = jwt_decode(token);
        setCurrUser(payload.username);
      };
    }
   decodeToken();
  }, [])

async function login(data) {
    const resp = await JoblyApi.login(data);
    if (resp) {
      setToken(resp);
    }
  }

  async function signup(data) {
    const resp = await JoblyApi.register(data);
      setToken(resp);
  }

  function logout() {
    if (currUser) {
     setCurrUser(null);
     setToken("");
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation currUser={currUser}/>
        <RoutesList login={login} signup={signup}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
