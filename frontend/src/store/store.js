import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {productDetailsReducer, productListReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducers";
import {
  userDeleteReducer,
  userDetailReducer, userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer, userUpdateReducer
} from "./reducers/userReducers";
import {orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer} from "./reducers/orderReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetail: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdate: userUpdateReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : {}

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage
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