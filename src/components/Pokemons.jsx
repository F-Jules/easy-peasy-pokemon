import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import Pokemon from "./Pokemon";
import PokemonDetail from "./PokemonDetail";

const Pokemons = () => {
  const pokemons = useStoreState(state => state.pokemons.allPokemons);
  const fetchPokemons = useStoreActions(
    actions => actions.pokemons.fetchPokemons
  );
  useEffect(() => {
    fetchPokemons();
  }, [fetchPokemons]);

  return (
    <section className="main mt-5">
      <aside className="pokemon-list">
        {pokemons.map((pokemon, i) => (
          <Pokemon key={i} pokemon={pokemon} />
        ))}
      </aside>
      <aside className="pokemon-show-case">
        <PokemonDetail />
      </aside>
    </section>
  );
};

export default Pokemons;
