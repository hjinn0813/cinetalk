// 로그인 페이지

import React from 'react';
import Kakao from '../components/Login/Kakao';
import Naver from '../components/Login/Naver';
import '../styles/Login/Login.scss';

export default function Login() {
  return (
    <div className="lg-wrap">
      <div className="lg-title">Login</div>
      <div className="lg-input">
        <label>
          <input type="text" id="userId" placeholder="아이디" />
        </label>
        <label>
          <input type="password" id="password" placeholder="비밀번호" />
        </label>
        <div className="lg-apply">
          <button className="lg-apply-btn">확인</button>
        </div>
      </div>
      <div className="lg-btns">
        <Kakao />
        <Naver />
      </div>
    </div>
  );
}
