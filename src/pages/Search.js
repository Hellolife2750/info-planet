import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";
import Filter from "../components/Filter";

const Search = () => {
  const [keyWords, setKeyWord] = useState("");
  const [planetsData, setPlanetsData] = useState([]);
  const searchInputRef = useRef(null);
  const [filterOpened, setFilterOpened] = useState(false);
  const [orderCoef, setOrderCoef] = useState(1);

  const [typeFilter, setTypeFilter] = useState(["planet", "moon"]);
  const [selectedFilterOrder, setSelectedFilterOrder] =
    useState("discoveryDate");

  useEffect(() => {
    searchInputRef.current.focus();

    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies")
      .then((res) => setPlanetsData(res.data.bodies));

    // const storedDatas = window.localStorage.getItem("INFO_PLANET_APP_STORAGE");
    // if (storedDatas !== null )
  }, []);

  function updateFilters(theType, theOrderCriteria) {
    setTypeFilter(theType);
    setSelectedFilterOrder(theOrderCriteria);
    console.log("filters updated");
  }

  const stringToYear = (dateString) => {
    if (dateString === "") {
      return 0;
    }

    const parts = dateString.split("/");
    const lastPart = parts[parts.length - 1];
    const year = parseInt(lastPart, 10);

    if (!isNaN(year)) {
      return year;
    }

    return undefined;
  };

  const compareCriterias = (a, b, criteria) => {
    if (criteria == "discoveryDate") {
      return stringToYear(a[criteria]) - stringToYear(b[criteria]);
    }
    return a[criteria] - b[criteria];
  };

  return (
    <div id="search">
      {filterOpened && (
        <Filter
          updateFilters={updateFilters}
          typeFilter={typeFilter}
          selectedFilterOrder={selectedFilterOrder}
          setFilterOpened={setFilterOpened}
        />
      )}

      <div className="back-img"></div>
      <Header />
      <div id="search-container">
        <input
          id="search-input"
          type="text"
          placeholder="Rechercher ma planète..."
          onChange={(event) => setKeyWord(event.target.value)}
          autoComplete="off"
          ref={searchInputRef}
        />
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <div className="right">
          <button
            id="filter-btn"
            className="filter-params-btn"
            onClick={(event) => setFilterOpened(!filterOpened)}
          >
            <i className="fa-solid fa-filter"></i>
          </button>
          <button
            id="sort-order-btn"
            className="filter-params-btn"
            onClick={() => setOrderCoef(-1 * orderCoef)}
          >
            {orderCoef == 1 ? (
              <i className="fa-solid fa-arrow-down-short-wide"></i>
            ) : (
              <i className="fa-solid fa-arrow-down-wide-short"></i>
            )}
          </button>
        </div>
      </div>

      <div className="cards-container">
        {/* {planetsData
          .filter((planet) => planet.name.includes(keyWords))
          .map((planet) => (
            <Card id={planet.id} thePlanet={planet} />
          ))} */}

        {keyWords !== "" &&
          planetsData
            .filter(
              (planet) =>
                (planet.isPlanet && typeFilter.includes("planet")) ||
                (!planet.isPlanet && typeFilter.includes("moon"))
            )
            .filter((planet) =>
              planet.name.toLowerCase().includes(keyWords.toLowerCase())
            )
            .sort(
              (a, b) => compareCriterias(a, b, selectedFilterOrder) * orderCoef
            )
            .map((planet) => <Card key={planet.id} thePlanet={planet} />)}
      </div>
    </div>
  );
};

export default Search;
