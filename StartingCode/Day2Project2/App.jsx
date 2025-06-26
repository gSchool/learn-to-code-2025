import { useState, useEffect } from 'react'
import './App.css'

export function App() {
  const [selectablePokemon, setSelectablePokemon] = useState([
    {name: "pikachu"},
    {name: "charmander"}, 
    {name: "bulbasaur"}
  ]) 

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(response => response.json())
      .then(pokeData => {
        console.log(pokeData)
        setSelectablePokemon(pokeData.results)
      })
  }, [])

  let handleShowPokemonClick = function(){
    const dropdown = document.getElementById("pokemon-select");
    
    const output = document.getElementById("pokemon-output");
    const selectedPokemon = dropdown.value;
    output.textContent = `You chose: ${selectedPokemon}!`;
  };

  return (
    <>
      <h1>Pokémon Selector!</h1>
      <h2>AFWERX - Learn To Code Event</h2>

      <select id="pokemon-select">
        {
          selectablePokemon.map(pokemon => {
            return <option value={pokemon.name}>{pokemon.name}</option>
          })
        }
      </select>

      <button id="show-button" onClick={handleShowPokemonClick}>Show Pokémon</button>

      <h2 id="pokemon-output">Select a pokemon from the drop down box!</h2>

    </>)
}

export default App
