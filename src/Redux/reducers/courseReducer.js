import * as types from "../../constants";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //state.push(action.course); dont do this
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
