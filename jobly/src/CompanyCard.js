import React from "react";

function CompanyCard({company}) {
return (
<div>
  <h3>{company.name}</h3>
  <p>{company.description}</p>
  {company.logoUrl &&
  <img src={company.logoUrl} alt={company.name} />}
</div>
  )
}

export default CompanyCard;

