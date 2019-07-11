import { action, thunk } from "easy-peasy";
import axios from "axios";
export default {
  //data
  allPokemons: [],
  selectedPokemon: null,

  //thunks
  fetchPokemons: thunk(async state => {
    const res = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=40&offset=0"
    );
    const pokemons = res.data.results;
    state.setPokemons(pokemons);
  }),

  fetchPokemon: thunk(async (state, name) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name);
    const pokemon = res.data;
    state.setCurrent(pokemon);
  }),

  //actions
  setPokemons: action((state, pokemons) => {
    state.allPokemons = pokemons;
  }),

  setCurrent: action((state, pokemon) => {
    state.selectedPokemon = pokemon;
  })
};
