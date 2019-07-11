import { action, thunk } from "easy-peasy";
import axios from "axios";

export default {
  //data
  allUsers: [],
  selectedUser: null,
  //thunks
  fetchUsers: thunk(async state => {
    const res = await axios.get("https://randomuser.me/api/?results=9");
    const users = res.data.results;
    // console.log(users);
    state.setUsers(users);
  }),

  //actions
  setUsers: action((state, users) => {
    state.allUsers = users;
  }),
  setSelectedUser: action((state, user) => {
    state.selectedUser = user;
  })
};
