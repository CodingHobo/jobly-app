import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import RoutesList from "./RoutesList";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.css';
import JoblyApi from "./api";
import jwt_decode from "jwt-decode";
import userContext from "./userContext";

/** Compiles Jobly App
 *
 * state:
 * - token:
 * - currUser:
*/

function App() {
  const [ token, setToken ] = useState("");
  const [currUser, setCurrUser] = useState(null);

  /** useEffect to check state of token.
   * If token, decode token as payload.
   * Make axios request with payload.username.
   * Set response as currUser.
   */
  useEffect(function checkToken() {
    async function decodeToken() {
      if (token) {
        const payload = jwt_decode(token);
        JoblyApi.token = token;

        const user = await JoblyApi.getUser(payload.username);
        setCurrUser(user);
      } else {
        setCurrUser(null);
      }
    }
   decodeToken();
  }, [token])

  /** Make request to login, set response as token. */
  async function login(data) {
    //TODO: add error catching for all api requests to account for 504
    const resp = await JoblyApi.login(data);
    setToken(resp);
  };

  /** Make request to sign up, set response as token. */
  async function signup(data) {
    const resp = await JoblyApi.register(data);
      setToken(resp);
  };

  /** Log out user, reset token. */
  function logout() {
     setToken("");
  };

  //TODO: add isloading and then remove after next part
  return (
    <div className="App">
      <userContext.Provider value={{currUser}}>
        <BrowserRouter>
          <Navigation logout={logout}/>
          <RoutesList login={login} signup={signup}/>
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
