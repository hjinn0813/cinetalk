// redux index : 여러 리듀서를 합치는 루트 리듀서 파일

import { combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducer';
import headerReducer from './headerSlice';
import postsReducer from '../reducers/postSlice';
// 상세보기, 라이브러리 삭제 기능 통합관리

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  posts: postsReducer,
  header: headerReducer,
});

export default rootReducer;
