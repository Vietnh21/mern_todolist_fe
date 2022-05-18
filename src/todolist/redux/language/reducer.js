import { SET_LANGUAGE } from "./constants";

const languageReducer = (state = { language: "en" }, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default languageReducer;
