import { useState, useEffect } from 'react'
import './App.css'

export function App() {
  const [selectablePokemon, setSelectablePokemon] = useState([
    {name: "pikachu"},
    {name: "charmander"}, 
    {name: "bulbasaur"}
  ])

  const [selectedPokemon, setSelectedPokemon] = useState({
    outputString: "Select a pokemon from the drop down box!",
    name: "N/A"
  })
  const [pokeImage, setPokeImage] = useState({
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDw6BaH-aunGxwN4JQc27-WxlU3tZ-9Gnjw&s"
  });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then(response => response.json())
      .then(pokeData => {
        console.log(pokeData)
        setSelectablePokemon(pokeData.results.map)
      })
  }, [])

  // let handleShowPokemonClick = function(){
  //   const dropdown = document.getElementById("pokemon-select");
  //   const selectedPokemon = dropdown.value;
    
  //   setSelectedPokemon()
    
  // };

  //IF TIME: use effect to show image of pokemon. when selected pokemon changes
  useEffect(() => {
    if(selectedPokemon.name != "N/A"){
      let currentSelectedPokemon = selectablePokemon.find(pokemon => pokemon.name == selectedPokemon.name);
      console.log(currentSelectedPokemon.url)
      fetch(currentSelectedPokemon.url)
        .then(response => response.json())
        .then(pokemonDetailData => {
          // console.log(pokemonDetailData.sprites.other.showdown.front_default);
          setPokeImage({ url: pokemonDetailData.sprites.other.showdown.front_default})
        })
    }
  }, [selectedPokemon])


  let onPokemonChange = function(event){
    // console.log(event.target.value)
    setSelectedPokemon({
      outputString: `You chose: ${event.target.value} using State!`,
      name: event.target.value
    })
  }



  return (
    <>
      <h1>Pokémon Selector!</h1>
      <h2>AFWERX - Learn To Code Event</h2>

      <select id="pokemon-select" onChange={onPokemonChange}>
        {
          selectablePokemon.map(pokemon => {
            return <option value={pokemon.name}>{pokemon.name}</option>
          })
        }
      </select>

      {/* <button id="show-button" onClick={handleShowPokemonClick}>Show Pokémon</button> */}

      <h2 id="pokemon-output">{selectedPokemon.outputString}</h2>
      <br/>
      <br/>
      <h2>{selectedPokemon.name.toUpperCase()}</h2>
      <img src={pokeImage.url} id="pokemon-image" alt="some text" />
    </>)
}

export default App
