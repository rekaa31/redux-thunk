import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, Route } from "react-router-dom";

import * as actionCreators from "../../store/actionCreators";
import User from "../User";

import classes from "./styles.module.css";

function Data(props) {
  const { loading, users, fetchData, match } = props;
  console.log("match", match);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function renderUsers() {
    if (users.lenght === 0 && loading) {
      return <span>Loading...</span>;
    }

    return users.map(user => (
      <div className={classes.userLink} key={user.id}>
        <Link to={`${match.url}/${user.id}`}>{user.name}</Link>
      </div>
    ));
  }

  return (
    <div>
      <h2>Data Component</h2>
      <div className={classes.users}>
        <div className={classes.usersList}>{renderUsers()}</div>
        {!loading && users.length > 0 && (
          <div className={classes.userDetails}>
            <Route path={`${match.url}/:userId`} component={User} />
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(
  state => ({
    loading: state.loading,
    users: state.users
  }),
  {
    fetchData: actionCreators.fetchData
  }
)(Data);
