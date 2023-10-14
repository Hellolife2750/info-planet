import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Planets from "../components/Planets";
import { NavLink } from "react-router-dom";

const Home = () => {
  const apiKey = process.env.REACT_APP_NASA_API_KEY;
  const [apodData, setApodData] = useState();

  useEffect(() => {
    console.log(apiKey);
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then((res) => setApodData(res.data));
  }, []);

  return (
    <div id="home">
      <Header />

      <div className="global-container">
        <video className="video-background" autoPlay loop muted>
          <source src="./home_background_video2.mp4" type="video/mp4" />
        </video>
      </div>

      <div id="presentation-container">
        <div className="left">
          <h1>InfoPlanet</h1>
          <p className="catchphrase">
            Bienvenue aux férus d'astronomie ! Consultez des données de toutes
            sortes concernant les planètes de notre galaxie en 3 clics.
          </p>
          <NavLink to="/search">
            <button id="explore-btn">Explorer</button>
          </NavLink>
        </div>
        <div className="right">
          <div className="img-container">
            {apodData != null && (
              <img id="daily-img" src={apodData.url} alt={apodData.title} />
            )}
          </div>
        </div>
      </div>

      <Footer />
      {/* <h1 className="titre">InfoPlanet</h1> */}
      {/* <Planets /> */}
    </div>
  );
};

export default Home;
