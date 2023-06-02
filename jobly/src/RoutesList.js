import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


/** List of routes for Jobly
 *
 * props:
 * - login: function to handle login form submit passed from app
 * - signup: function to handle signup form submit passed from app
 *
 * app -> RoutesList -> Homepage/CompanyList/JobList/CompanyDetail/LoginForm/SignupForm/Profile
 *
 */

function RoutesList({login, signup}) {
  return (
    <Routes>
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/login" element={<LoginForm handleLogin={login}/>} />
      <Route path="/signup" element={<SignupForm handleSignup={signup}/>} />
      {/* <Route path="/profile" element={<ProfileForm />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;