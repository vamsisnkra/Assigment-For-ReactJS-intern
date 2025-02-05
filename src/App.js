import React, { useState } from 'react';
import './App.css';
import CountryList from './components/CountryList';

function App() {
  const [countries, setCountries] = useState([]);

  // Add a new country
  const addCountry = (countryName) => {
    const newCountry = {
      id: countries.length + 1,
      name: countryName,
      states: [],
    };
    setCountries([...countries, newCountry]);
  };

  // Update country name
  const updateCountry = (id, newName) => {
    const updatedCountries = countries.map((country) =>
      country.id === id ? { ...country, name: newName } : country
    );
    setCountries(updatedCountries);
  };

  // Delete a country
  const deleteCountry = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this country?");
    if (confirmation) {
      const updatedCountries = countries.filter(country => country.id !== id);
      setCountries(updatedCountries);
    }
  };

  return (
    <div className="App">
      <h1>Country, State, and City Management</h1>
      <button onClick={() => {
        const countryName = prompt("Enter new country name");
        if (countryName) addCountry(countryName);
      }}>Add Country</button>
      <CountryList
        countries={countries}
        updateCountry={updateCountry}
        deleteCountry={deleteCountry}
      />
    </div>
  );
}

export default App;