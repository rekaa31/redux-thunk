import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actionCreators";

function User(props) {
  const { loading, userId, user, fetchUser } = props;

  useEffect(() => {
    fetchUser({ userId });
  }, [userId, fetchUser]);

  if (loading) {
    return <div>Loading user...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>ID: {user.id}</p>
    </div>
  );
}

export default connect(
  (state, ownProps) => {
    const { match } = ownProps;
    const userId = match.params.userId;

    return {
      loading: state.loadingUser,
      user: state.usersById[userId],
      userId
    };
  },
  {
    fetchUser: actionCreators.fetchUser
  }
)(User);
