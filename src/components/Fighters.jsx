const Fighters = (props) => {
    const { zombieFighers } = props
    return (
        <>
          <li key={index} className="fighter-item">
            <img src={fighter.img} alt={fighter.name} />
            <h2>{fighter.name}</h2>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        </>
    )
}

export default Fighters