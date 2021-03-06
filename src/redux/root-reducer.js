import {combineReducers} from 'redux';

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userRecuder from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer=combineReducers({
    user: userRecuder,
    cart: cartReducer
})

export default persistReducer(persistConfig,rootReducer)