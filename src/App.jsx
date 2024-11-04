// src/App.jsx
import { useState } from 'react';
import './app.css'
import Fighters from './components/Fighters';

const App = () => {
  const [team, setTeam] = useState([

  ])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      setTotalStrength(totalStrength + fighter.strength)
      setTotalAgility(totalAgility + fighter.agility)
    }
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((t) => t.name !== fighter.name)
    setTeam(updatedTeam)
    setMoney(money + fighter.price)
    setTotalStrength(totalStrength - fighter.strength)
    setTotalAgility(totalAgility - fighter.agility)
  };

  return (
    <>
    <h1>Money: {money}</h1>
    <h1>Strength: {totalStrength}</h1>
    <h1>Agility: {totalAgility}</h1>
    <h2>Your Team</h2>
      <ul>
        {team.length > 0 ? (
          team.map((fighter, index) => (
            <li key={index} className="fighter-item">
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
          </li>
          ))
        ) : (
          <li>Pick some team members!</li>
        )}
      </ul>
      <h1>Available:</h1>
  <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index} className="fighter-item">
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      
      </>
  );
}

export default App
