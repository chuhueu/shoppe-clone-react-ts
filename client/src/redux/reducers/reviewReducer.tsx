import { AnyAction } from "redux";
import {
  POST_REVIEW,
  GET_REVIEW,
  UPDATE_REVIEW,
  REMOVE_REVIEW,
} from "../constants/reviewConstant";
export interface Review {
  id: string;
  product: string;
  user: string;
  username: string;
  avatar: string;
  rating: number;
  comment: string;
  image: string;
  video: string;
  createdAt: string;
}
export interface reviewState {
  review: Array<Review>;
}
export const reviewReducer = (state: reviewState, action: AnyAction) => {
  switch (action.type) {
    case POST_REVIEW:
      return {
        review: action.payload,
      };
    case GET_REVIEW:
      return {
        review: action.payload,
      };
    case REMOVE_REVIEW:
      return {
        review: state.review?.filter((item) => item.id !== action.payload.id),
      };
    case UPDATE_REVIEW:
      return {
        review: action.payload,
      };
    default:
      return { ...state };
  }
};
