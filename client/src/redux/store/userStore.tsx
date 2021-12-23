import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "../reducers/userReducer";
const reducers = combineReducers({
  userLogin: userReducer,
});

const initialState = {
  userLogin: {
    userInfo: JSON.parse(localStorage.getItem("user") || "") || null,
    isFetching: true,
    error: false,
  },
} as {};

const middleware = [thunk];

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
