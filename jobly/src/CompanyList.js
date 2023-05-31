import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "./CompanyCard";

const URL = 'http://localhost:3001/companies'

function CompanyList() {
  const [companiesList, setCompaniesList] = useState({
    companies: null,
    isLoading: true,
  });

  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const companiesResult = await axios.get(URL);
      setCompaniesList({
        companies: companiesResult.data.companies,
        isLoading: false,
      });
    }
    fetchCompanies();
  }, [ ]);
  console.log("companiesList===", companiesList)
  if (companiesList.isLoading) return <i>Loading...</i>;


  return (
    <div>
      {companiesList.companies.map(company =>
<CompanyCard key={company.handle} company={company} />
      )
      }
    </div>
  );
}

export default CompanyList;
