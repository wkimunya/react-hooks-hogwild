import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from "./HogTile";
import FilterSort from "./FilterSort";

function App() {
  const [filteredHogs, setFilteredHogs] = useState(hogs);
  const [sortBy, setSortBy] = useState("name");

  const filterGreased = (event) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      const greasedHogs = hogs.filter((hog) => hog.greased);
      setFilteredHogs(greasedHogs);
    } else {
      setFilteredHogs(hogs);
    }
  };

  const sortHogs = (event) => {
    const selectedSort = event.target.value;
    setSortBy(selectedSort);

    const sortedHogs = [...filteredHogs].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (selectedSort === "weight") {
        return a.weight - b.weight;
      }
	  return 0;
    });
    setFilteredHogs(sortedHogs);
  };

  return (
    <div className="App">
      <Nav />
      <FilterSort filterGreased={filterGreased} sortHogs={sortHogs} />
      <div className="hog-container">
        {filteredHogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} />
        ))}
      </div>
    </div>
  );
}

export default App;
