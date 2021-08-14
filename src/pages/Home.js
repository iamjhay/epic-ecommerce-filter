import React from "react";
import Homepage from "../components/Homepage";
// import FilterPanel from "../components/Homepage/FilterPanel";
// import List from "../components/Homepage/List";
// import SearchBar from "../components/Homepage/SearchBar";

const Home = () => {
  return (
    <div className="home">
      {/* <SearchBar />

      <div className="home-container">
        <div className="home_panel-wrap">
          <FilterPanel />
        </div>
        <div className="home_list-wrap">
          <List />
        </div>
      </div> */}
      <Homepage />
    </div>
  );
};

export default Home;
