import {delay, put, takeLatest} from 'redux-saga/effects'
import { setActive } from '../slice/VideoSlice';
function* pushed(){
    yield delay(350);
    yield put(setActive(true));
}


function* saga(){
    yield takeLatest('PUSHED', pushed)
}

export default saga;