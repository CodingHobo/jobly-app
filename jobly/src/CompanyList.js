import React, { useState, useEffect } from "react";
import axios from "axios";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const URL = 'http://localhost:3001/companies'


/** Component to display list of companies
 *
 * State:
 * - companiesList: {companies: [company...]
 *                   isLoading: determines what get rendered based on value}
 * - query: term taken from SearchForm and used as value for query parameter
 *
 * RoutesList -> CompanyList-> SearchForm/CompanyCard
 *
 */

function CompanyList() {
  const [companiesList, setCompaniesList] = useState({
    companies: null,
    isLoading: true,
  });
  const [query, setQuery] = useState("");

  /** Perform get request to /companies with query param nameLike */
  async function handleSearch() {
    if (query !== "") {
      const response = await axios.get(`${URL}?nameLike=${query}`);
      setCompaniesList({companies: response.data.companies});
    };
    setQuery("");
  };

  /** Make get request and update companiesList upon mount */
  useEffect(function fetchCompaniesWhenMounted() {
    async function fetchCompanies() {
      const response = await axios.get(URL);
      setCompaniesList({
        companies: response.data.companies,
        isLoading: false,
      });
    };
    fetchCompanies();
  }, [ ]);

  if (companiesList.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={handleSearch}
                  query={query}
                  queryChange={setQuery}/>
      {companiesList.companies.map(company =>
        <Link to={`/companies/${company.handle}`}>
          <CompanyCard key={company.handle} company={company} />
        </Link>
        )
      }
    </div>
  );
}

export default CompanyList;
