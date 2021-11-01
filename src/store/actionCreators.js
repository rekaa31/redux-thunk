import * as actions from "./actions";

export function fetchDataPending() {
  return {
    type: actions.FETCH_DATA_PENDING
  };
}

export function fetchDataSuccess({ users }) {
  return {
    type: actions.FETCH_DATA_SUCCESS,
    payload: {
      users
    }
  };
}

export function fetchDataFailuer() {
  return {
    type: actions.FETCH_DATA_FAILURE
  };
}

export function fetchData() {
  return async dispatch => {
    dispatch(fetchDataPending());

    try {
      const users = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then(res => res.json());
      dispatch(fetchDataSuccess({ users }));
    } catch {
      dispatch(fetchDataFailuer());
    }
  };
}

export function fetchUserPending() {
  return {
    type: actions.FETCH_USER_PENDING
  };
}

export function fetchUserSuccess({ user, userId }) {
  return {
    type: actions.FETCH_USER_SUCCESS,
    payload: {
      user,
      userId
    }
  };
}

export function fetchUserFailuer() {
  return {
    type: actions.FETCH_USER_FAILURE
  };
}

export function fetchUser({ userId }) {
  return async dispatch => {
    dispatch(fetchUserPending());

    try {
      const user = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      ).then(res => res.json());

      if (!user || user.id !== parseInt(userId, 10))
        throw new Error("User not found");

      dispatch(fetchUserSuccess({ user, userId }));
    } catch {
      dispatch(fetchUserFailuer());
    }
  };
}
