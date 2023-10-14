import React from "react";

const Card = ({ thePlanet }) => {
  return (
    <div id="planet-card">
      {/* <img
        id="planet-img"
        src={
          "./planetsImg/" + thePlanet.id + ".jpg" || "./planetsImg/terre.jpg"
        }
        alt={"image de " + thePlanet.name}
      /> */}
      <h3 className="card-title">{thePlanet.name}</h3>
      <h4 className="planet-type">
        {thePlanet.isPlanet
          ? "Planète"
          : thePlanet.aroundPlanet && thePlanet.aroundPlanet.planet
          ? `Lune autour de ${thePlanet.aroundPlanet.planet}`
          : "Lune autour d'une planète inconnue"}
      </h4>
      <h4 className="discovery-date">
        {"Découverte " +
          (thePlanet.discoveryDate == ""
            ? "indéfinie"
            : `le ${thePlanet.discoveryDate}`)}
      </h4>
    </div>
  );
};

export default Card;
