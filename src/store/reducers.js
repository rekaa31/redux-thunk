import * as actions from "./actions";

const initialState = {
  loading: false,
  users: [],
  usersById: {},
  loadingUser: false
};

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.FETCH_DATA_PENDING: {
      return {
        ...state,
        loading: true
      };
    }

    case actions.FETCH_DATA_SUCCESS: {
      const { users } = payload;

      return {
        ...state,
        loading: false,
        users
      };
    }

    case actions.FETCH_DATA_FAILURE: {
      return {
        ...state,
        loading: false
      };
    }

    case actions.FETCH_USER_PENDING: {
      return {
        ...state,
        loadingUser: true
      };
    }

    case actions.FETCH_USER_SUCCESS: {
      const { user, userId } = payload;

      return {
        ...state,
        loadingUser: false,
        usersById: {
          ...state.usersById,
          [userId]: user
        }
      };
    }

    case actions.FETCH_USER_FAILURE: {
      return {
        ...state,
        loadingUser: false
      };
    }

    default: {
      return state;
    }
  }
}
