// 마이 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyPage/MyPage.scss';

export default function Mypage() {
  return (
    <div>
      <div className="mypage-container">
        <div className="page-title">MY PAGE</div>
        <div className="profile">
          <div className="nickname">홍길동</div>
        </div>
        <div className="profile-btns">
          <button className="m-btn">
            <Link to="/Watched">라이브러리</Link>
          </button>
          <button className="m-btn">본 작품 캘린더</button>
          <button className="m-btn">본 작품 통계</button>
        </div>
      </div>
    </div>
  );
}
