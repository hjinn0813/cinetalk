// footer

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/Footer/Footer.scss';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="contents" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block' }}>
            <div className="footer-logo">
              <Link to="/" style={{ textDecoration: 'none' }}>
                {/* 로고 클릭시 이동 */}
                <div className="logo">
                  <img src={logo} alt="Logo" />
                </div>
              </Link>
            </div>
            <div>
              <div className="title">(주)시네톡</div>
              <div className="title">대표이사: 조혜진</div>
              <div className="title">주소: 서울시 서초구 사평대로 52길</div>
              <div className="title">사업자등록번호: 123-45-67890</div>
              <div className="title">개인정보 관리 책임자: 홍길동</div>
            </div>
            <br />
            <div className="title">© 2024 Cinetalk Corp.</div>
          </div>
          <div className="right-text">
            <div>
              <div className="title">서비스 이용 약관</div>
              <div className="title">개인정보 처리 방침</div>
              <div className="title">회사 소개</div>
            </div>
            <div>
              <div className="title">FAX: 1234-5678</div>
              <div className="title">고객센터: 1588-0000 (유료)</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
