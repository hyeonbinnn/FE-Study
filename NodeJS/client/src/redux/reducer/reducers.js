import { ActionType } from '../action/actionType';

export const loginUser = (state = {}, action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;

    default:
      return state;
  }
};
