import React from 'react';

const DetailedCard = ({ thePlanet }) => {

    //const caracteristics = [`<i class="fa-solid fa-arrows-left-right-to-line"></i> Distance du soleil : ${thePlanet.distance_moyenne_average_distance_x10_6_km}`];

    function getValueOrZero(val) {
        return val == null ? 0 : val;
    }

    function getFrenchName(name) {
        const words = name.split('/');
        return words.length === 1 ? name.trim() : words[1].trim();;
    }

    return (
        <div id="detailed-card">
            <div className="left">
                <img className="planet-img" src={thePlanet.image.url} alt={"illustration de " + thePlanet.planete_planet}></img>
            </div>
            <div className='right'>
                <h3 className='planet-name'>{getFrenchName(thePlanet.planete_planet)}</h3>
                <div className='caracs-container'>
                    <div className='left-caracs'>
                        <ul className='planet-caracteristics'>
                            {/* {caracteristics.map((carac) => (<li>{carac}</li>))} */}
                            <li><i class="fa-solid fa-arrows-left-right-to-line"></i> Distance soleil: {getValueOrZero(thePlanet.distance_moyenne_average_distance_x10_6_km)} Millions km</li>
                            <li><i class="fa-solid fa-calendar-days"></i> Révolution: {getValueOrZero(thePlanet.periode_de_revolution_jours_orbital_period_days)} j</li>
                            <li><i class="fa-solid fa-arrow-rotate-right"></i> Rotation: {getValueOrZero(thePlanet.periode_de_rotation_rotation_period_h)} h</li>
                        </ul>
                    </div>
                    <div className='right-caracs'>
                        <ul className='planet-caracteristics'>

                            <li><i class="fa-regular fa-circle"></i> Diamètre: {getValueOrZero(thePlanet.diametre_diameter_km)} km</li>
                            <li><i class="fa-solid fa-weight-hanging"></i> Masse: {getValueOrZero(thePlanet.masse_mass_x10_24_kg)} Quadrillons  kg</li>
                            <li><i class="fa-solid fa-down-long"></i> Gravité: {getValueOrZero(thePlanet.gravite_gravity_m_s2)} m/s</li>
                            <li><i class="fa-solid fa-temperature-half"></i> Température moyenne: {getValueOrZero(thePlanet.temperature_moyenne_mean_temperature_degc)} °C</li>
                        </ul>
                    </div>
                </div>
                {/* <ul className='planet-caracteristics'>
                    <li><i class="fa-solid fa-arrows-left-right-to-line"></i> Distance soleil: {getValueOrZero(thePlanet.distance_moyenne_average_distance_x10_6_km)} Millions km</li>
                    <li><i class="fa-solid fa-calendar-days"></i> Révolution: {getValueOrZero(thePlanet.periode_de_revolution_jours_orbital_period_days)} j</li>
                    <li><i class="fa-solid fa-arrow-rotate-right"></i> Rotation: {getValueOrZero(thePlanet.periode_de_rotation_rotation_period_h)} h</li>
                    <li><i class="fa-regular fa-circle"></i> Diamètre: {getValueOrZero(thePlanet.diametre_diameter_km)} km</li>
                    <li><i class="fa-solid fa-weight-hanging"></i> Masse: {getValueOrZero(thePlanet.masse_mass_x10_24_kg)} Quadrillons  kg</li>
                    <li><i class="fa-solid fa-down-long"></i> Gravité: {getValueOrZero(thePlanet.gravite_gravity_m_s2)} m/s</li>
                    <li><i class="fa-solid fa-temperature-half"></i> Température moyenne: {getValueOrZero(thePlanet.temperature_moyenne_mean_temperature_degc)} °C</li>
                </ul> */}
            </div>
        </div>
    );
};

export default DetailedCard;