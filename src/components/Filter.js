import React from "react";

const Filter = ({
  updateFilters,
  typeFilter,
  selectedFilterOrder,
  setFilterOpened,
}) => {
  const orderNames = {
    discoveryDate: "Date de découverte",
    density: "Densité",
    gravity: "Gravité",
    mass: "Masse",
    vol: "Volume",
  };

  const changeType = (aType) => {
    const typeFilterCopy = typeFilter.slice();

    if (typeFilterCopy.includes(aType)) {
      const index = typeFilterCopy.indexOf(aType);
      if (index !== -1) {
        typeFilterCopy.splice(index, 1);
      }
    } else {
      typeFilterCopy.push(aType);
    }
    return typeFilterCopy;
  };

  return (
    <>
      <div id="filters-background" onClick={() => setFilterOpened(false)}></div>
      <div id="filter">
        <div className="type">
          <h3>Type</h3>
          <hr />
          <div className="items">
            <div className="row">
              <input
                type="checkbox"
                name="type-filter"
                id="planet-filter"
                checked={typeFilter.includes("planet")}
                onChange={(e) =>
                  updateFilters(changeType("planet"), selectedFilterOrder)
                }
              />
              <label htmlFor="planet-filter">Planètes</label>
            </div>
            <div className="row">
              <input
                type="checkbox"
                name="type-filter"
                id="moon-filter"
                checked={typeFilter.includes("moon")}
                onChange={(e) =>
                  updateFilters(changeType("moon"), selectedFilterOrder)
                }
              />
              <label htmlFor="moon-filter">Lunes</label>
            </div>
          </div>
        </div>
        <div className="order">
          <h3>Ordre</h3>
          <hr />
          <ul>
            {Object.keys(orderNames).map((criteria) => (
              <li key={criteria}>
                <input
                  type="radio"
                  name="order-criteria"
                  id={criteria + "-filter"}
                  checked={selectedFilterOrder == criteria}
                  onChange={(e) => updateFilters(typeFilter, criteria)}
                />
                <label htmlFor={criteria + "-filter"}>
                  {orderNames[criteria]}
                </label>
              </li>
            ))}
          </ul>
          {/* <ul>
          <li>
            <input
              type="radio"
              name="order-criteria"
              id="discovery-date-filter"
            />
            <label htmlFor="discovery-date-filter">Date de découverte</label>
          </li>
        </ul> */}
        </div>
      </div>
    </>
  );
};

export default Filter;
