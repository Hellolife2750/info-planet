import { React, useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { getValueOrZero, getFrenchName } from '../Utils';

const Comparison = () => {

    const [selectedDatas, setSelectedDatas] = useState(["Soleil", "Soleil", "Distance soleil"]);
    const [planetsData, setPlanetsData] = useState();
    const comparisonCriterias = {
        "Distance soleil": "distance_moyenne_average_distance_x10_6_km"
        , "Révolution": "periode_de_revolution_jours_orbital_period_days"
        , "Rotation": "periode_de_rotation_rotation_period_h"
        , "Diamètre": "diametre_diameter_km"
        , "Masse": "masse_mass_x10_24_kg"
        , "Gravité": "gravite_gravity_m_s2"
        , "Température moyenne": "temperature_moyenne_mean_temperature_degc"
    };

    const indicator1 = useRef(null);
    const indicator2 = useRef(null);

    useEffect(() => {
        axios
            .get("https://www.datastro.eu/api/explore/v2.1/catalog/datasets/donnees-systeme-solaire-solar-system-data/records?limit=20")
            .then((res) => setPlanetsData(res.data.results));
        console.log(planetsData)
    }, []);

    /*const getValueForPlanet = (planetName, criteriaName) => {
        let val = -1;

        planetsData.map((planet) => {
            console.log(planet.planete_planet + "  et  " + planetName)
            if (getFrenchName(planet.planete_planet) == planetName) {
                val = planet[criteriaName];

            }
            console.log(planet[criteriaName])
        })
        return val;
    }*/

    const getValueForPlanet = (planetName, criteriaName) => {
        for (const planet of planetsData) {
            if (planet.planete_planet.includes(planetName)) {
                return planet[criteriaName];
            }
        }
        return -1;
    }


    const generateGraphic = () => {
        let planet1Value = getValueForPlanet(selectedDatas[0], comparisonCriterias[selectedDatas[2]]);
        let planet2Value = getValueForPlanet(selectedDatas[1], comparisonCriterias[selectedDatas[2]]);
        console.log(planet1Value)
        console.log(planet2Value)

        let maxValue = Math.max(planet1Value, planet2Value);

        indicator1.current.style.width = `${(planet1Value * maxValue) / 100}%`;
        indicator2.current.style.width = `${(planet2Value * maxValue) / 100}%`;
    }

    return (
        <div id="comparison">
            <div className="back-img"></div>
            <Header />

            <div id="comparison-container">

                <div className='criteria-container'>
                    <div className='up'>
                        <select className='first-planet-select' onChange={(e) => setSelectedDatas([e.target.options[e.target.selectedIndex].text.trim(), selectedDatas[1], selectedDatas[2]])}>
                            {planetsData != null &&
                                planetsData.sort((a, b) => a.ordre_order - b.ordre_order)
                                    .map((planet, index) => (<option key={index} value={planet.ordre_order}>{getFrenchName(planet.planete_planet)}</option>))
                            }
                        </select>

                        <button className='compare-btn' onClick={() => generateGraphic()}>Comparer</button>

                        <select className='second-planet-select' onChange={(e) => setSelectedDatas([selectedDatas[0], e.target.options[e.target.selectedIndex].text, selectedDatas[2]])} >
                            {planetsData != null &&
                                planetsData.sort((a, b) => a.ordre_order - b.ordre_order)
                                    .map((planet, index) => (<option key={index} value={planet.ordre_order}>{getFrenchName(planet.planete_planet)}</option>))
                            }
                        </select>

                    </div>

                    <div className='down'>
                        <select className='criteria-select' onChange={(e) => setSelectedDatas([selectedDatas[0], selectedDatas[1], e.target.options[e.target.selectedIndex].text])}>
                            {Object.keys(comparisonCriterias).map((criteria, index) => (<option key={index} value={index} >{criteria}</option>))}
                        </select>
                    </div>
                </div>

                <div className='graphic-container'>
                    <div ref={indicator1} className='min indicator-figure'></div>
                    <div ref={indicator2} className='max indicator-figure'></div>
                </div>
            </div>
        </div >
    );
};

export default Comparison;