import React from "react";

const Exercise1 = () => {
  const Planets = [
    { name: "Mercury", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
  ];

  return (
    <>
      <div className="Exercise1">
        {Planets.map((planet, key) => {
          return planet.isGasPlanet && <h1 key={key}>{planet.name}</h1>;
        })}
      </div>
    </>
  );
};

export default Exercise1;
