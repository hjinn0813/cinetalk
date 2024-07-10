// 로그인 페이지

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Kakao from '../components/Login/Kakao';
import Naver from '../components/Login/Naver';
import '../styles/Login/Login.scss';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  // 테스트용 아이디와 비번
  const testUserId = 'cinetalk';
  const testUserPw = 'cinetalk01';

  const handleLogin = async () => {
    if (!userId || !userPw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // 테스트용 아이디와 비밀번호와 일치하는지 확인
    if (userId !== testUserId || userPw !== testUserPw) {
      alert('아이디 또는 비밀번호가 일치하지 않습니다.');
      return;
    }

    // 로그인 성공시 (ex: 토큰 저장)
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/MyPage');
  };

  return (
    <div className="lg-wrap">
      <div className="lg-title">Login</div>
      <div className="lg-input">
        <label>
          <input
            type="text"
            id="userId"
            placeholder="아이디"
            value={userId}
            onChange={(e) => {
              setUserId(e.target.value);
              setLoginError('');
            }}
          />
        </label>
        <label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호"
            value={userPw}
            onChange={(e) => {
              setUserPw(e.target.value);
              setLoginError('');
            }}
          />
        </label>
        <div className="lg-apply">
          <button className="lg-apply-btn" onClick={handleLogin}>
            확인
          </button>
        </div>
        {loginError && <div className="lg-error">{loginError}</div>}
      </div>
      <div className="lg-btns">
        <Kakao />
        <Naver />
      </div>
    </div>
  );
}
