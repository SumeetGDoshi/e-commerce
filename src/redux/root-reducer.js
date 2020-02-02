import {combineReducers} from 'redux';

import userRecuder from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userRecuder,
    cart: cartReducer
})