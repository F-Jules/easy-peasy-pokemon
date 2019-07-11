import React from "react";
import { Route, Switch } from "react-router-dom";
import NavMain from "./components/NavMain";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Pokemons from "./components/Pokemons";
import "./App.css";
import { StoreProvider, createStore } from "easy-peasy";
import users from "./models/users";
import pokemons from "./models/pokemons";

const store = createStore({ users, pokemons });

function App() {
  return (
    <React.Fragment>
      <StoreProvider store={store}>
        <NavMain />
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/friends/:name" component={UserDetails} />
          <Route path="/friends" component={Users} />
          <Route path="/pokemons" component={Pokemons} />
        </Switch>
      </StoreProvider>
    </React.Fragment>
  );
}

export default App;
