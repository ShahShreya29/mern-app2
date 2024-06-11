// store.js
import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "../User/authReducer";
import { ProductReducer } from "../Products/Reducer";
import { CartReducer } from "../Cart/Reducer";
import { OrderReducer } from "../Order/Reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: ProductReducer,
  cart: CartReducer,
  order:OrderReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
