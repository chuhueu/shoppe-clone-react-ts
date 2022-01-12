import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userLoginReducer, userRegisterReducer } from "../reducers/userReducer";
import { brandReducer } from "../reducers/productReducer";
import {
  createCartReducer,
  getCartReducer,
  removeCartReducer,
  updateQtyCartReducer,
} from "../reducers/cartReducer";
import { orderItemsReducer } from "../reducers/orderReducer";

const reducers = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  createCart: createCartReducer,
  cart: getCartReducer,
  removeCart: removeCartReducer,
  updateQtyCart: updateQtyCartReducer,
  brand: brandReducer,
  orderItems: orderItemsReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo")!)
  : null;
const orderItemsInfoFromStorage = localStorage.getItem("orderItems")
  ? JSON.parse(localStorage.getItem("orderItems")!)
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
  orderItems: orderItemsInfoFromStorage,
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
