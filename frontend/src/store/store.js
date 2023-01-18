import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import {
  userDetailReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer
} from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage
  },
  userLogin: {
    userInfo: userInfoFromStorage
  }
}

const store = configureStore({
  reducer,
  preloadedState: initialState
})

export default store