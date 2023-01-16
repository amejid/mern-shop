import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
})

const store = configureStore({
  reducer
})

export default store