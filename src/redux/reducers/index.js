// redux index : 여러 리듀서를 합치는 루트 리듀서 파일

import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
