import { TOGGLE_SIDEBAR } from "./userTypes";

const initialState = {
  sidebar: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebar: !state.sidebar };
    default:
      return state;
  }
};
