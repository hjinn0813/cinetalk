// 마이 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyPage/MyPage.scss';

export default function Mypage() {
  const handleLogout = () => {
    // 로그아웃: 로컬 스토리지에서 로그인 상태 삭제
    localStorage.removeItem('isLoggedIn');
    // 로그아웃 후 홈으로 리디렉션
    window.location.href = '/';
  };

  return (
    <div className="mypage-container">
      <div className="page-title">MY PAGE</div>
      <div className="profile">
        <div className="nickname">홍길동</div>
      </div>
      <div className="profile-btns">
        <button className="m-btn">
          <Link to="/Watched" className="movingbtn">
            라이브러리
          </Link>
        </button>
        <button className="m-btn">
          <Link to="/Write" className="movingbtn">
            리뷰 작성하기
          </Link>
        </button>
        <button className="m-btn">본 작품 캘린더</button>
        <button className="m-btn">본 작품 통계</button>
        <button className="m-btn logout" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
