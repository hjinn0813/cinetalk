// header
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/Header/Header.scss';

// import { ReactComponent as Book } from '../../assets/Header/Book.svg';
import { ReactComponent as Person } from '../../assets/Header/Person.svg';

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="main-logo">
            <Link to="/" style={{ textDecoration: 'none' }}>
              {/* 로고 클릭시 이동 */}
              <div className="logo">
                <img src={logo} alt="Logo" />
                <div className="logo-1">홈</div>
              </div>
            </Link>
          </div>
          <div className="icon-container">
            <Link to="/MyPage" className="header-link">
              <Person className="icon" />
            </Link>
            <Link to="/MyPage" className="header-link">
              <span>마이 페이지</span>
            </Link>
          </div>
          {/* <div className="icon-container">
            <Link to="/Watched" className="header-link">
              <Book className="icon" />
            </Link>
            <Link to="/Watched" className="header-link">
              <span>라이브러리</span>
            </Link>
          </div> */}
          {/* 수정 요망 */}
        </div>
      </header>
    </div>
  );
}
