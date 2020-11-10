import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function SearchBar() {
  const inputYear = useSelector((state) => state.mainReducer.inputYear);
  const inputName = useSelector((state) => state.mainReducer.inputName);
  const inputType = useSelector((state) => state.mainReducer.inputType);
  
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const API = "http://www.omdbapi.com/";
  const KEY = "apikey=2ffffb97";

  console.log(inputYear, inputType, inputName);
  console.log(movies);

  useEffect(() => {
    Axios.get(
      API + `?s=${inputName}&y=${inputYear}&type=${inputType}&` + KEY
    ).then((res) => setMovies(res.data.Search));
  }, [inputName, inputType, inputYear]);

  return (
    <div className="searchBar">
      <div className="searchBar__year">
        <input
          onChange={(e) =>
            dispatch({ type: "YEAR_CHANGE", payload: e.target.value })
          }
          value={inputYear}
          type="number"
          placeholder="Year"
        />
      </div>
      <div className="searchBar__type">
        <select
          onChange={(e) =>
            dispatch({ type: "TYPE_CHANGE", payload: e.target.value })
          }
          value={inputType}
          placeholder="Type"
        >
          <option>Movie</option>
          <option>Series</option>
        </select>
      </div>
      <div>
        <input
          onChange={(e) =>
            dispatch({ type: "NAME_CHANGE", payload: e.target.value })
          }
          value={inputName}
          placeholder="Enter movie name here"
        />
      </div>
      <div>
        <button
          onClick={() => dispatch({ type: "SEARCH_MOVIE", payload: movies })}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
