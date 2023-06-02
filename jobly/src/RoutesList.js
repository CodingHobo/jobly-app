import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import userContext from "./userContext";

/** List of routes for Jobly
 *
 * props:
 * - login: function to handle login form submit passed from app
 * - signup: function to handle signup form submit passed from app
 *
 * context:
 * - currUser: current user data
 * 
 * TODO: add list of protected routes
 *
 * app -> RoutesList -> Homepage/CompanyList/JobList/CompanyDetail/LoginForm/SignupForm/Profile
 *
 */

function RoutesList({ login, signup }) {
  const { currUser } = useContext(userContext);

  return (
    <Routes>
      {/* TODO: currUser && protected routes / no currUser
      protect login and signup against logged in users */}
      <Route
        path="/companies"
        element={currUser ? <CompanyList /> : <Navigate replace to={"/"} />}
      />
      <Route
        path="/jobs"
        element={currUser ? <JobList /> : <Navigate replace to={"/"} />}
      />
      <Route
        path="/companies/:handle"
        element={currUser ? <CompanyDetail /> : <Navigate replace to={"/"} />}
      />
      <Route path="/login" element={<LoginForm handleLogin={login} />} />
      <Route path="/signup" element={<SignupForm handleSignup={signup} />} />
      {/* <Route path="/profile" element={currUser ? (<ProfileForm />) : (
      <Navigate replace to={"/"} />
    )}  /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
