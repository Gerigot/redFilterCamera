import {takeLatest} from 'redux-saga/effects'
function* start(){
    
}


function* saga(){
    yield takeLatest('START', start)
}

export default saga;