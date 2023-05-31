import React from "react";


/** Component to render information about job
 *
 * Props:
 * - title: title of job
 * - companyName: name of company offering job
 * - salary: salary for job, only display if salary value exists
 * - equity: equity for job
 *
 * JobList/CompanyDetail -> JobCard
 *
 */

function JobCard({ title, companyName, salary, equity }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{companyName}</p>
      {salary && <p>Salary: {salary}</p>}
      <p>Equity: {equity}</p>
    </div>
  );
}

export default JobCard;
