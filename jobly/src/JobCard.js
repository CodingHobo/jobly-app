import React from "react";

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
