import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";

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
      <Route path="/" element={<Homepage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;