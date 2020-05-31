import {takeLatest,call,put} from 'redux-saga/effects';

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
    

}


export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}
