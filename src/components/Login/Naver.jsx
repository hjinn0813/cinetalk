// 네이버 로그인 버튼
import React from 'react';
import '../../styles/Login/Naver.scss';
import { NAVER_AUTH_URL } from '../Login/Oauth';

export default function Naver() {
  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <button className="naver-login" onClick={NaverLogin}>
      네이버 로그인
    </button>
  );
}
