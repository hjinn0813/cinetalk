// 카카오 로그인 버튼
import React from 'react';
import '../../styles/Login/Kakao.scss';

export default function Kakao() {
  const KAKAO_api_key = 'process.env.REACT_APP_KAKAO_API'; //REST API KEY
  const redirect_url = 'http://localhost:3000/auth'; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_api_key}&redirect_uri=${redirect_url}&response_type=code`;
  const handleLogin = () => {
    window.location.href = kakaoURL;
  };
  return (
    <>
      <button className="kakao-login" onClick={handleLogin}>
        카카오 로그인
      </button>
    </>
  );
}
