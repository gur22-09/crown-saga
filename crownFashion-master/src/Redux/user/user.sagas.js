import {takeLatest,put,all,call} from 'redux-saga/effects';

//action Types
import {userActionTypes} from './user.types';




//firebase
import {auth,googleProvider,createUserProfileDocument} from '../../firebase/firebase.utils';

//actions
import {signInFailure, signInSuccess} from './user-action';

function* signInWithGoogle(){
  try{
       const {user} = yield auth.signInWithPopup(googleProvider);
       const userRef = yield call(createUserProfileDocument,user);
       const userSnapshot = yield userRef.get();
       yield put(
           signInSuccess({id:userSnapshot.id,...userSnapshot.data()})
       )
  }catch(err){
       yield put(
           signInFailure(err)
       )  
  }  
}


function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = auth.signInWithEmailAndPassword(email,password);
        const userRef = yield call(createUserProfileDocument,user);
        const userSnapshot = yield userRef.get();
        yield put(
            signInSuccess({id:userSnapshot.id,...userSnapshot.data()})
        )
    }catch(err){
        yield put(signInFailure(err))
    }
}


export function* onSignInWithGoogle(){
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* onSignInWithEmail(){
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* userSagas(){
    yield all([call(onSignInWithGoogle),call(onSignInWithEmail)]);
} 