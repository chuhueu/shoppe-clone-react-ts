import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
} from "../constants/userConstants";

export interface userState {
  userInfo?: object | null;
  isFetching?: boolean;
  error?: boolean;
}

interface Action {
  type: string;
  payload: string;
}

export const userReducer = (state: userState, action: Action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case USER_LOGIN_FAILED:
      return {
        isFetching: false,
        error: true,
      };
    case USER_LOGOUT: {
      return {
        userInfo: null,
        isFetching: false,
        error: false,
      };
    }
    default:
      return { ...state };
  }
};
