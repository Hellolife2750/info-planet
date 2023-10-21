import { React, useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import DetailedCard from '../components/DetailedCard';

const SolarSystem = () => {

    const [planetsData, setPlanetsData] = useState();

    useEffect(() => {
        axios
            .get("https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=20")
            .then((res) => setPlanetsData(res.data.results));
        console.log(planetsData)
    }, []);



    return (
        <div id="solar-system">
            <div className="back-img"></div>
            <Header />

            <div className='planets-container'>
                {planetsData != null &&
                    planetsData
                        .sort((a, b) => a.ordre_order - b.ordre_order)
                        .map((planet) => <DetailedCard key={planet.ordre_order} thePlanet={planet} />)

                }
            </div>
        </div>
    );
};

export default SolarSystem;