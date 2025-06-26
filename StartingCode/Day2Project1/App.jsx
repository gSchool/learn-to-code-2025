import { useState } from 'react'
import './App.css'

export function App() {

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
        <option value="Pikachu">Pikachu</option>
        <option value="Charmander">Charmander</option>
        <option value="Bulbasaur">Bulbasaur</option>
        <option value="Squirtle">Squirtle</option>
        <option value="Eevee">Eevee</option>
      </select>

      <button id="show-button" onClick={handleShowPokemonClick}>Show Pokémon</button>

      <h2 id="pokemon-output">Select a pokemon from the drop down box!</h2>

    </>)
}

export default App
