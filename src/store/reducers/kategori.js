import * as actionsTypes from "../actions/kategori/actionsTypes";

const initialState = {
  kategori: [],
  
};

const Kategori = (state = initialState, action) => {
  console.log("kategori",actionsTypes.GET_KATEGORI)
  switch (action.type) {

    case actionsTypes.GET_KATEGORI:
      return {
        ...state,
        kategori: action.payload,
      };
    case actionsTypes.ADD_KATEGORI:
      return {
        ...state,
        kategori: action.payload.data.data.rows,
      };
    case actionsTypes.UPDATE_KATEGORI:
      return {
        ...state,
      };
    case actionsTypes.DELETE_KATEGORI:
      return {
        ...state,
      };
    default:
      console.log(initialState, "Call data from bookReducer")
      return state;
  }
};

export default Kategori;
