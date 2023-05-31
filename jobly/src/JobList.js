import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm";

const URL = 'http://localhost:3001/jobs'


/** Component to display list of jobs
 *
 * State:
 * - jobsList: {jobs: [Job...]
 *                   isLoading: determines what get rendered based on value}
 * - query: term taken from SearchForm and used as value for query parameter
 *
 * RoutesList -> JobList-> SearchForm/JobCard
 *
 */

function JobList() {
  const [jobsList, setJobsList] = useState({
    jobs: null,
    isLoading: true,
  });
  const [query, setQuery] = useState("");

  /** Perform get request to /jobs with query param title */
  async function handleSearch() {
    if (query !== "") {
      const response = await axios.get(`${URL}?title=${query}`);
      setJobsList({jobs: response.data.jobs});
    };
    setQuery("");
  };

  /** Make get request and update jobsList upon mount */
  useEffect(function fetchJobsWhenMounted() {
    async function fetchJobs() {
      const response = await axios.get(URL);
      setJobsList({
        jobs: response.data.jobs,
        isLoading: false,
      });
    };
    fetchJobs();
  }, [ ]);

  if (jobsList.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm handleSearch={handleSearch}
                  query={query}
                  queryChange={setQuery}/>
      {jobsList.jobs.map(job =>
        <JobCard key={job.id}
                 title={job.title}
                 companyName={job.companyName}
                 salary={job.salary}
                 equity={job.equity} />
        )
      }
    </div>
  );
}

export default JobList;