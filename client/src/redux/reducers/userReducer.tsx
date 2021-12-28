import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
} from "../constants/userConstants";

interface userInfo {
  _id?: string;
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
  googleID?: string;
}
export interface userState {
  userInfo?: userInfo | null;
  isFetching?: boolean;
  error?: boolean;
}

interface Action {
  type: string;
  payload: string;
}

export const userLoginReducer = (state: userState, action: Action) => {
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
        isFetching: true,
        error: false,
      };
    }
    default:
      return { ...state };
  }
};

export const userRegisterReducer = (state: userState, action: Action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case USER_REGISTER_FAILED:
      return {
        isFetching: false,
        error: true,
      };
    case USER_LOGOUT: {
      return {
        userInfo: null,
        isFetching: true,
        error: false,
      };
    }
    default:
      return { ...state };
  }
};
