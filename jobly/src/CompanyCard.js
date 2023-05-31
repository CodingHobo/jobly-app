import React from "react";


/** Component to render information about company
 *
 * Props: company-like object {handle, name, description, numEmployees, logoUrl}
 *
 * CompanyList -> CompanyCard
 *
 */

function CompanyCard({company}) {
return (
<div>
  <h3>{company.name}</h3>
  <p>{company.description}</p>
  {company.logoUrl &&
  <img src={company.logoUrl} alt={company.name} />}
</div>
  );
}

export default CompanyCard;

