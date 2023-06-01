import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';


/** Component to display details for company
 *
 * State:
 * - compDetails: {company: {company info..., [jobs]}
 *                 isLoading: determines what get rendered based on value}
 *
 * RoutesList -> CompanyList-> CompanyDetail
 *
 */

function CompanyDetail() {
  const [compDetails, setCompDetails] = useState({
    company: null,
    isLoading: true,
  });

  const {handle} = useParams();

  /** Make get request and update compDetails upon mount */
  useEffect(function fetchCompDetailsWhenMounted() {
    async function fetchCompDetail() {
      const response = await JoblyApi.getCompany(handle);
      setCompDetails({
        company: response,
        isLoading: false,
      });
    };
    fetchCompDetail();
  }, []);

  if (compDetails.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <h2>{compDetails.company.name}</h2>
      <p>{compDetails.company.description}</p>
      <div>
        {compDetails.company.jobs.map(job =>
          <JobCard key={job.id}
                    title={job.title}
                    salary={job.salary}
                    equity={job.equity} />
          )
        }
      </div>
    </div>
  );
}

export default CompanyDetail;