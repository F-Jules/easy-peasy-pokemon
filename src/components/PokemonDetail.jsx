import React from "react";
import { useStoreState } from "easy-peasy";

const PokemonDetail = () => {
  const pokemon = useStoreState(state => state.pokemons.selectedPokemon);

  return (
    <>
      <h2>Pokemon Inspector</h2>
      {pokemon && (
        <div className="pokemon-show-case-card">
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <p style={{ textAlign: "center", textTransform: "capitalize" }}>
            {pokemon.name}
          </p>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
