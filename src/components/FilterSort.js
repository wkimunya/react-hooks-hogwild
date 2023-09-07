import React from "react";

const FilterSort = ({ filterGreased, sortHogs }) => {
  return (
    <div className="filter-sort-container">
      <label>
        <input type="checkbox" onChange={filterGreased} /> Filter Greased Hogs
      </label>
      <label>
        Sort By:
        <select onChange={sortHogs}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
};

export default FilterSort;
