import {takeLatest,put,all,call} from 'redux-saga/effects';
import {userActionTypes} from '../user/user.types';
import {clearCart} from './cart-action';



function* clearCartAfterSignoOut(){
    yield put(clearCart());
}


export function* onClearCart(){
    yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS,clearCartAfterSignoOut)
}


export function* cartSagas(){
    yield all([call(onClearCart)])
};

