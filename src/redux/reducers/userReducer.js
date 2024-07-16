// 사용자 관련 상태를 관리하는 리듀서 파일 (회원가입 페이지)

const initialState = {
  userName: '',
  userId: '',
  userPw: '',
  terms: {
    term1: false,
    term2: false,
    term3: false,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        userName: action.payload.userName,
        userId: action.payload.userId,
        userPw: action.payload.userPw,
        terms: {
          term1: action.payload.terms.term1,
          term2: action.payload.terms.term2,
          term3: action.payload.terms.term3,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
