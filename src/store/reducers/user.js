import * as actionTypes from "../actions/users/actionsTypes";

const initialState = {
  users: null,
  user: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case actionTypes.GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
      };
      case actionTypes.ADD_LOGIN:
        return {
          ...state,
          users: action.payload.data.data.rows,
        };
    /* case actionTypes.DELETE_USER:
      return {
        ...state,
      }; */
    default:
      return state;
  }
};

export default users;
