import React from 'react';
import ReviewBox from '../components/Main/ReviewBox';
import '../styles/Main/Main.scss';

export default function Main() {
  return (
    <div>
      <section className="main-container">
        <div className="main-item">
          <div className="new">지금 뜨는 최신 글</div>
          <ReviewBox />
        </div>
        <div className="main-item">
          <div className="friends">내 친구는 지금</div>
          <ReviewBox />
        </div>
      </section>
    </div>
  );
}
