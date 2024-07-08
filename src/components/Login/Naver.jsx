// 네이버 로그인 버튼
import React from 'react';
import '../../styles/Login/Naver.scss';

export default function Naver() {
  const NAVER_api_key = 'process.env.REACT_APP_NAVER_API';
  const REDIRECT_URI = 'http://localhost:3000/oauth'; // Callback URL
  const STATE = 'flase';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_api_key}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <button className="naver-login" onClick={NaverLogin}>
      네이버 로그인
    </button>
  );
}
