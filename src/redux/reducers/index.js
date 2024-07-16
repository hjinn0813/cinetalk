// redux index : 여러 리듀서를 합치는 루트 리듀서 파일

import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/loginReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
