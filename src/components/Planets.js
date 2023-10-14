import axios from "axios";
import React, { useEffect, useState } from "react";

const Planets = () => {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies")
      .then((res) => {
        const planets = res.data.bodies.filter((body) => body.isPlanet);
        setPlanetsData(planets);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        );
      });
  }, []);

  return (
    <div className="planets-container">
      <ul>
        {planetsData.map((planet) => (
          <li key={planet.id}>
            <h3>{planet.englishName}</h3>
            <p>Nom : {planet.name}</p>
            <p>Semi-major Axis : {planet.semimajorAxis}</p>
            <img src={planet.rel} alt={planet.englishName} />
            {/* Ajoutez ici d'autres informations que vous souhaitez afficher */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planets;
