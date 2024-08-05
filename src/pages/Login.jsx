// 로그인 페이지

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, loginFailure } from '../redux/actions/authActions';
import Kakao from '../components/Login/Kakao';
import Naver from '../components/Login/Naver';
import '../styles/Login/Login.scss';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginError = useSelector((state) => state.auth.error);

  // 테스트용 아이디와 비번
  const testUserId = 'cinetalk';
  const testUserPw = 'cinetalk1!';

  const verifyId = () => {
    if (!userId) {
      dispatch(loginFailure('아이디를 입력해주세요.'));
      return false;
    } else if (
      userId.length < 4 ||
      userId.length > 10 ||
      !/^[a-zA-Z0-9]+$/.test(userId)
    ) {
      dispatch(loginFailure('아이디는 4 ~ 10자의 영문&숫자입니다.'));
      return false;
    } else if (userId !== testUserId) {
      dispatch(loginFailure('아이디가 일치하지 않습니다.'));
      return false;
    }
    dispatch(loginFailure(''));
    return true;
  };

  const verifyPw = () => {
    if (!userPw) {
      dispatch(loginFailure('비밀번호를 입력해주세요.'));
      return false;
    } else if (
      userPw.length < 8 ||
      userPw.length > 15 ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(userPw)
    ) {
      dispatch(loginFailure('비밀번호는 특수문자 포함 8 ~ 15자입니다.'));
      return false;
    } else if (userPw !== testUserPw) {
      dispatch(loginFailure('비밀번호가 일치하지 않습니다.'));
      return false;
    }
    dispatch(loginFailure(''));
    return true;
  };

  const handleLogin = async () => {
    if (verifyId() && verifyPw()) {
      // 로그인 성공시 정보 저장
      dispatch(loginSuccess());
      navigate('/Profile');
    } else {
      dispatch(loginFailure('로그인 실패!😭'));
    }
  };

  // 회원가입 페이지 이동 버튼
  const toRegister = () => {
    navigate('/register');
  };

  return (
    <div className="lg-wrap">
      <div className="lg-title">Login</div>
      <div className="lg-input">
        <input
          type="text"
          className="lg-focus userId"
          placeholder="아이디"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
            dispatch(loginFailure(''));
          }}
          onBlur={verifyId}
        />
        <input
          type="password"
          className="lg-focus password"
          placeholder="비밀번호"
          value={userPw}
          onChange={(e) => {
            setUserPw(e.target.value);
            dispatch(loginFailure(''));
          }}
          onBlur={verifyPw}
          // 입력 필드에서 포커스가 사라지면 호출
        />
        {loginError && <div className="lg-error">{loginError}</div>}
        <div className="lg-apply">
          <button className="lg-apply-btn" onClick={handleLogin}>
            확인
          </button>
        </div>
      </div>
      <div className="lg-btns">
        <button className="register" onClick={toRegister}>
          아이디로 회원가입
        </button>
        <Kakao />
        <Naver />
      </div>
    </div>
  );
}
