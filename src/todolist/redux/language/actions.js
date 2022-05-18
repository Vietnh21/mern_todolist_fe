import { SET_LANGUAGE } from "./constants";

export function setLanguage(payload) {
  return {
    type: SET_LANGUAGE,
    payload,
  };
}
