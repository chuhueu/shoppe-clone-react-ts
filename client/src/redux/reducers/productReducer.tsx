import {
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "../constants/productConstants";

interface brandInfo {
  _id?: string;
  name?: string;
  image?: string;
  content?: any;
}

export interface brandState {
  brandInfo?: brandInfo | null;
  isFetching?: boolean;
  error?: boolean;
}

interface Action {
  type: string;
  payload: string;
}

export const brandReducer = (state: brandInfo, action: Action) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
      };
    case GET_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
