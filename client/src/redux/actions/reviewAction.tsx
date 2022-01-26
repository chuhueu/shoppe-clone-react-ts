import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../store";
import axios from "../../axios";
import {
  POST_REVIEW,
  GET_REVIEW,
  UPDATE_REVIEW,
  REMOVE_REVIEW,
} from "../constants/reviewConstant";

export const postReview =
  (
    product: string,
    user: string,
    username: string,
    avatar: string,
    rating: number,
    comment: string,
    image: string | null,
    video: string | null
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      const { data } = await axios.post(`/review/comment/${product}`, {
        product,
        user,
        username,
        avatar,
        rating,
        comment,
        image,
        video,
      });
      dispatch({
        type: POST_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const getReview =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      const { data } = await axios.get(`/review/comment/${id}`);
      console.log(data);

      dispatch({
        type: GET_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
export const removeReview =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      const { data } = await axios.post(`/review/comment/${id}`);
      dispatch({
        type: REMOVE_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updateReview =
  (
    review: any,
    id: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>,
    getState: () => RootState
  ): Promise<void> => {
    try {
      const { data } = await axios.post(`/review/comment/${id}`, {
        review,
      });
      dispatch({
        type: UPDATE_REVIEW,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
