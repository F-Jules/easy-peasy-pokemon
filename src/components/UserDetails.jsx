import React from "react";
import { useStoreState } from "easy-peasy";

const UserDetails = React.memo(props => {
  const user = useStoreState(state => state.users.selectedUser);

  return (
    <section className="main user-detail-page">
      <div>
        <img className="user-avatar" src={user.picture.large} alt={user.name} />
      </div>
      <div className="user-info">
        <span style={{ fontWeight: "bold" }}>First Name: </span>
        {user.name.first}
      </div>
      <div className="user-info">
        <span style={{ fontWeight: "bold" }}>Last Name: </span> {user.name.last}
      </div>
      <div className="user-info">
        <span style={{ fontWeight: "bold" }}>Gender: </span>
        {user.gender}
      </div>
      <div className="user-info">
        <span style={{ fontWeight: "bold" }}>Street: </span>
        {user.location.street}
      </div>
      <div className="user-info">
        <span style={{ fontWeight: "bold" }}>City: </span>
        {user.location.city}
      </div>
    </section>
  );
});

export default UserDetails;
