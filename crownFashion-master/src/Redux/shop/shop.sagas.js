import {takeEvery,call,put} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsStartSuccess,fetchCollectionsStartFailure} from '../../Redux/shop/shop.action';

function* fetchCollectionsAsync(){
    try{
        
    const collectionRef = firestore.collection('collections');
        
    const snapShot = yield collectionRef.get();

    const collectionsMap = yield call(convertCollectionsSnapshotToMap,snapShot);
    
    yield put(fetchCollectionsStartSuccess(collectionsMap));
    
    }catch(err){
        yield put(fetchCollectionsStartFailure(err));
    }
    
    // collectionRef.get().then(snapShot=>{

    //   const collectionsMap = convertCollectionsSnapshotToMap(snapShot);

    //   //now after successfully getting the collctions we are going to dispatch our fetchCollectionsSuccess function 

    //   dispatch(fetchCollectionsStartSuccess(collectionsMap));
      
    // }).catch(error=>dispatch(fetchCollectionsStartFailure(error))); 
}


export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}