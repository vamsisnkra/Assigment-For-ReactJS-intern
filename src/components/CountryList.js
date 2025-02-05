import React from 'react';
import StateList from './StateList';

const CountryList = ({ countries, updateCountry, deleteCountry }) => {
  return (
    <div className="country-list">
      <h2>Countries</h2>
      {countries.map(country => (
        <div key={country.id} className="country-item">
          <h3>{country.name}</h3>
          <button onClick={() => {
            const newName = prompt("Enter new country name", country.name);
            if (newName) updateCountry(country.id, newName);
          }}>Edit</button>
          <button onClick={() => deleteCountry(country.id)}>Delete</button>
          <StateList country={country} />
        </div>
      ))}
    </div>
  );
};

export default CountryList;