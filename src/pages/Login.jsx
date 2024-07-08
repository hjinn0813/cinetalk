// 로그인 페이지

import React from 'react';
import Kakao from '../components/Login/Kakao';
import Naver from '../components/Login/Naver';
import '../styles/Login/Login.scss';

export default function Login() {
  return (
    <div className="lg-wrap">
      <div className="lg-title">Login</div>
      <div className="lg-btns">
        <Kakao />
        <Naver />
      </div>
    </div>
  );
}
