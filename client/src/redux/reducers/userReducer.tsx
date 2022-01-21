import { AnyAction } from "redux";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_GET_ADDRESS,
  USER_GET_ONE_ADDRESS,
  USER_ADD_ADDRESS,
  USER_UPDATE_ADDRESS,
  USER_REMOVE_ADDRESS,
} from "../constants/userConstants";

interface userInfo {
  _id?: string;
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
  role?: string;
  googleID?: string;
}
export interface userState {
  userInfo?: userInfo | null;
  isFetching?: boolean;
  error?: boolean;
}

export interface addressInfo {
  _id: string;
  user: string;
  fullName: string;
  phoneNumber: number;
  street: string;
  town: string;
  district: string;
  province: string;
}

export interface addressState {
  address: Array<addressInfo>;
}

export const userLoginReducer = (state: userState, action: AnyAction) => {
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

export const userRegisterReducer = (state: userState, action: AnyAction) => {
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
        isFetching: false,
        error: false,
      };
    }
    default:
      return { ...state };
  }
};

export const userAddressReducer = (state: addressState, action: AnyAction) => {
  switch (action.type) {
    case USER_GET_ADDRESS: {
      return {
        address: action.payload,
      };
    }
    case USER_GET_ONE_ADDRESS: {
      return {
        address: action.payload,
      };
    }
    case USER_ADD_ADDRESS: {
      return {
        address: action.payload,
      };
    }
    case USER_REMOVE_ADDRESS: {
      return {
        address: state.address?.filter(
          (item: any) => item._id !== action.payload.id
        ),
      };
    }
    default:
      return { ...state };
  }
};
