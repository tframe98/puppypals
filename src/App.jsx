//Import the useState hook and the puppy data
import {puppyList} from './data.js';
import { useState } from 'react';
import './App.css';

const App = () => {
  // Start useState with puppyList
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {
        // Map over the puppies array from the state
        puppies.map((puppy) => (
          <p onClick={() => setFeatPupId(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))
      }
      {featPupId && (
        <div>
          <h2>{featuredPup?.name}</h2>
          <ul>
            <li>Age: {featuredPup?.age}</li>
            <li>Email: {featuredPup?.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;
