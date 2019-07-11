import React from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

const User = ({ user }) => {
  const setSelectedUser = useStoreActions(
    actions => actions.users.setSelectedUser
  );

  const handleClick = () => {
    setSelectedUser(user);
  };

  return (
    <div onClick={handleClick} className="user-card">
      <div className="user-image">
        <img
          className="user-avatar"
          src={user.picture.medium}
          alt={"Picture of" + user.name}
        />
      </div>
      <Link to={"/friends/" + user.name.first}>
        <p>{user.name.first}</p>
        <p>{user.name.last}</p>
      </Link>
    </div>
  );
};

export default User;
