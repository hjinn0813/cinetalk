// 카카오 로그인 버튼
import React from 'react';
import '../../styles/Login/Kakao.scss';
import { KAKAO_AUTH_URL } from '../Login/Oauth';

export default function Kakao() {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <>
      <button className="kakao-login" onClick={handleLogin}>
        카카오 로그인
      </button>
    </>
  );
}
