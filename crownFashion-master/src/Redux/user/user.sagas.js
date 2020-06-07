import {takeLatest, put, all, call} from 'redux-saga/effects';

//action Types
import {userActionTypes} from './user.types';

//firebase
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';

//actions
import {
    signInFailure,
    signInSuccess,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user-action';

function * getUserSnapShot(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (err) {
        yield put(signInFailure(err))
    }
}
//SIGN-Up

function * onSignUpStart({
    payload: {
        email,
        password
    }
}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(signUpSuccess({
            id: userSnapshot.id,
            ...userSnapshot.data()
        }))
    } catch (err) {
        yield put(signUpFailure(err));
    };
};

function * signUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, onSignUpStart);
}

function * signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getUserSnapShot(user);
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function * signInWithEmail({
    payload: {
        email,
        password
    }
}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);

        yield getUserSnapShot(user);
    } catch (err) {
        yield put(signInFailure(err))
    }
}

function * checkUserSession() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) 
            return;
        yield getUserSnapShot(userAuth);
    } catch (err) {
        put(signInFailure(err));
    }
}

function * signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (err) {
        yield put(signOutFailure(err));
    }
}

export function * onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function * onSignInWithGoogle() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function * onSignInWithEmail() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function * onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut);
}

export function * userSagas() {
    yield all([call(onSignInWithGoogle), call(onSignInWithEmail), call(onCheckUserSession), call(onSignOutStart), call(signUpStart)]);
}