// 사용자 관련 액션 생성자 파일 (회원가입 페이지)

export const setUserInfo = (userInfo) => {
  return {
    type: 'SET_USER_INFO',
    payload: userInfo,
  };
};
