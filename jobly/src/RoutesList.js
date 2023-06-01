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
 * app -> RoutesList -> Homepage/CompanyList/JobList/CompanyDetail
 *
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      {/* <Route path="/profile" element={<ProfileForm />} /> */}
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;