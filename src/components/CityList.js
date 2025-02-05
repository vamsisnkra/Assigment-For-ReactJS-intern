import React, { useState } from 'react';

const CityList = ({ state }) => {
  const [cities, setCities] = useState(state.cities);

  // Add a new city
  const addCity = () => {
    const cityName = prompt("Enter new city name");
    if (cityName) {
      setCities([...cities, cityName]);
    }
  };

  // Delete city
  const deleteCity = (cityName) => {
    const confirmation = window.confirm(`Are you sure you want to delete city: ${cityName}?`);
    if (confirmation) {
      const updatedCities = cities.filter(city => city !== cityName);
      setCities(updatedCities);
    }
  };

  return (
    <div className="city-list">
      <h6>Cities in {state.name}</h6>
      <button onClick={addCity}>Add City</button>
      {cities.map((city, index) => (
        <div key={index} className="city-item">
          <span>{city}</span>
          <button onClick={() => deleteCity(city)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CityList;