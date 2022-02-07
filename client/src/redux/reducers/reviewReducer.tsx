import { AnyAction } from "redux";
import {
  POST_REVIEW,
  GET_REVIEW,
  UPDATE_REVIEW,
  REMOVE_REVIEW,
  GET_STATIC,
  FILTER_BY_STAR,
  FILTER_BY_IMAGE_OR_VIDEO,
} from "../constants/reviewConstant";
export interface Review {
  _id: string;
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
interface Static {
  star5: number;
  star4: number;
  star3: number;
  star2: number;
  star1: number;
  review: number;
  reviewHasImageOrVideo: number;
  rateAvg: number;
}
export interface reviewState {
  review: Review[] | [];
  statistic: Static;
}

export const reviewReducer = (state: reviewState, action: AnyAction) => {
  switch (action.type) {
    case GET_STATIC:
      return {
        ...state,
        statistic: action.payload,
      };
    case POST_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    case GET_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    case FILTER_BY_STAR:
      return {
        ...state,
        review: action.payload,
      };
    case FILTER_BY_IMAGE_OR_VIDEO:
      return {
        ...state,
        review: action.payload,
      };
    case REMOVE_REVIEW:
      return {
        ...state,
        review: state.review?.filter((item) => item._id !== action.payload.id),
      };
    case UPDATE_REVIEW:
      return {
        ...state,
        review: action.payload,
      };
    default:
      return { ...state };
  }
};
