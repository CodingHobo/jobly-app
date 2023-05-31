import React from "react";


/** Form for searching/filtering companies/jobs
 *
 * Props:
 * - handleSearch: function to call in parent to handleSubmit
 * - query: state passed from parent
 * - queryChange: function to call in parent to handleChange
 *
 * CompanyList/JobList -> SearchForm
 *
 */

function SearchForm( { handleSearch, query, queryChange }) {

  /** Perform search with query */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSearch(query);
  }

  /** Call parent function onChange */
  function handleChange(evt) {
    queryChange(evt.target.value)
  };

  /** Render the form */
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="search"
        name="search"
        value={query}
        placeholder="Enter search term..."
        onChange={handleChange}
        />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;