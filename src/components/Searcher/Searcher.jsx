
import React, { useState } from "react";


const Searcher = (props) => {
  const [filterValue, setFilterValue] = useState([]);

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    const filterArray = props.Data.filter((e) => {
      return e.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (searchValue === "") {
      setFilterValue([]);
    } else {
      setFilterValue(filterArray);
    }
  };

  return (
    <div>
      
      <div classname="searchBox"></div>
      <input
        type="text"
        placeholder={props.Placeholder}
        onChange={handleSearch}
      />
      <div className="searchList">
        {filterValue.length !== 0 &&
          filterValue.map((e) => {
            return <p>{e.title}</p>;
          })}
      </div>
    </div>
  );
};
export default Searcher;