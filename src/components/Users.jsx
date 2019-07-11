import React, { useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import User from "./User";

const Users = () => {
  const [color, setColor] = useState("green");
  const users = useStoreState(state => state.users.allUsers);
  const fetchUsers = useStoreActions(actions => actions.users.fetchUsers);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section style={{ backgroundColor: color }} className="main">
      <button onClick={() => setColor("red")}>Change color</button>
      <h1 className="title">All my friends</h1>
      <aside className="users-show-case">
        {users.map((user, i) => (
          <User key={i} user={user} />
        ))}
      </aside>
    </section>
  );
};

export default Users;
