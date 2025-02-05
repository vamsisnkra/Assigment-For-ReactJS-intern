import React, { useState } from 'react';
import CityList from './CityList';

const StateList = ({ country }) => {
  const [states, setStates] = useState(country.states);

  // Add a new state
  const addState = () => {
    const stateName = prompt("Enter new state name");
    if (stateName) {
      const newState = {
        id: states.length + 1,
        name: stateName,
        cities: [],
      };
      setStates([...states, newState]);
    }
  };

  // Update state name
  const updateState = (id, newName) => {
    const updatedStates = states.map(state =>
      state.id === id ? { ...state, name: newName } : state
    );
    setStates(updatedStates);
  };

  // Delete state
  const deleteState = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this state?");
    if (confirmation) {
      const updatedStates = states.filter(state => state.id !== id);
      setStates(updatedStates);
    }
  };

  return (
    <div className="state-list">
      <h4>States in {country.name}</h4>
      <button onClick={addState}>Add State</button>
      {states.map(state => (
        <div key={state.id} className="state-item">
          <h5>{state.name}</h5>
          <button onClick={() => {
            const newName = prompt("Enter new state name", state.name);
            if (newName) updateState(state.id, newName);
          }}>Edit</button>
          <button onClick={() => deleteState(state.id)}>Delete</button>
          <CityList state={state} />
        </div>
      ))}
    </div>
  );
};

export default StateList;