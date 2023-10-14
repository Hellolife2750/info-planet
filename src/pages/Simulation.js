import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";

const Simulation = () => {
  const personRef = useRef(null);

  useEffect(() => {
    console.log(personRef.current);
    // simulateChute(3.7, 300);
  }, []);

  function simulateChute(gravity, initialHeight) {
    const deltaTime = 0.01;
    let velocity = 0;
    let height = initialHeight;
    let time = 0;

    // Fonction pour mettre à jour la position de l'image
    function updatePosition() {
      // Calcul de la nouvelle vitesse en utilisant la gravité
      velocity += gravity * deltaTime;

      // Calcul de la nouvelle position en utilisant la vitesse
      height -= velocity * deltaTime;

      // Mettre à jour la position de l'image
      personRef.current.style.top = height + "px";

      // Si l'objet n'a pas encore touché le sol, continuer l'animation
      if (height > 0) {
        requestAnimationFrame(updatePosition);
      } else {
        console.log(`L'objet a touché le sol en ${time.toFixed(2)} secondes.`);
      }
    }

    // Démarrer l'animation
    requestAnimationFrame(updatePosition);
  }

  return (
    <div>
      <Header />
      <img
        id="person"
        src="person.svg"
        alt="Image SVG d'une personne"
        draggable="false"
        ref={personRef}
      ></img>
    </div>
  );
};

export default Simulation;
