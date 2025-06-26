import './App.css';

export function App() {

    //
    // const dropdown = document.getElementById("pokemon-select");
    // const button = document.getElementById("show-button");
    // const output = document.getElementById("pokemon-output");

    // button.addEventListener("click", () => {
    //   const selectedPokemon = dropdown.value;
    //   output.textContent = `You chose: ${selectedPokemon}!`;
    // });

    
    return (
        <>
            <h1>Pokémon Selector!</h1>
            <h2>AFWERX - Learn To Code Event</h2>

            <select id='pokemon-select'>
                <option value='Pikachu'>Pikachu</option>
                <option value='Charmander'>Charmander</option>
                <option value='Bulbasaur'>Bulbasaur</option>
                <option value='Squirtle'>Squirtle</option>
                <option value='Eevee'>Eevee</option>
            </select>


            <button id="show-button">Show Pokémon</button>

            <h2 id='pokemon-output'>Select a pokemon from the drop down box!</h2>

            {/* <script src='index.js'></script> */}
        </>
    );
}

export default App;
