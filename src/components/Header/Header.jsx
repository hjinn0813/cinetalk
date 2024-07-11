// header
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/Header/Header.scss';

import { ReactComponent as Posts } from '../../assets/Header/Posts.svg';
import { ReactComponent as Account } from '../../assets/Header/Account.svg';
import { ReactComponent as Friends } from '../../assets/Header/Friends.svg';
import { ReactComponent as LogIn } from '../../assets/Header/LogIn.svg';
import { ReactComponent as Search } from '../../assets/Header/Search.svg';

export default function Header() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="main-logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="logo" />
              {/* 로고 이미지 클릭시 홈으로 이동 */}
            </Link>
          </div>
          <div className="icon-container">
            <div className="header-btns">
              <Link to="/Search" className="header-link">
                <Search className="icon" />
              </Link>
              <Link to="/Search" className="header-link">
                <span className="header-txt">Search</span>
              </Link>
            </div>
            <div className="header-btns">
              <Link to="#" className="header-link">
                <Posts className="icon" />
              </Link>
              <Link to="#" className="header-link">
                <span className="header-txt">New</span>
              </Link>
            </div>
            <div className="header-btns">
              <Link to="#" className="header-link">
                <Friends className="icon" />
              </Link>
              <Link to="#" className="header-link">
                <span className="header-txt">Friends</span>
              </Link>
            </div>
            <div className="header-btns">
              {isLoggedIn ? (
                <>
                  <Link to="/MyPage" className="header-link">
                    <Account className="icon" />
                  </Link>
                </>
              ) : (
                <Link to="/login" className="header-link">
                  <LogIn className="icon" />
                </Link>
              )}
              {isLoggedIn ? (
                <>
                  <Link to="/MyPage" className="header-link">
                    <span className="header-txt">My Page</span>
                  </Link>
                </>
              ) : (
                <Link to="/login" className="header-link">
                  <span className="header-txt">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
