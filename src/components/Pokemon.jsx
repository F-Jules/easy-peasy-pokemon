import React from "react";
import { useStoreActions } from "easy-peasy";

const Pokemon = ({ pokemon }) => {
  const fetchPokemon = useStoreActions(
    actions => actions.pokemons.fetchPokemon
  );
  return (
    <div onClick={() => fetchPokemon(pokemon.name)} className="pokemon-card">
      <p style={{ textAlign: "center", textTransform: "capitalize" }}>
        {pokemon.name}
      </p>
    </div>
  );
};

export default Pokemon;
