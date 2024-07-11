// 리뷰 상세보기 컴포넌트 구조
import React from 'react';
import '../../styles/Review/ReadPosts.scss';

export default function ReadPosts({ poster, title, date, body }) {
  const posterImage = require(`../../assets/Watched/${poster}.jpg`);

  return (
    <div className="r-container">
      <div className="r-box">
        <div className="r-info">
          <img className="r-poster" src={posterImage} alt="poster" />
          <div className="r-text">
            <div className="r-title">{title}</div>
            <div className="r-date">{date}</div>
          </div>
        </div>
        <div className="r-body">{body}</div>
      </div>
    </div>
  );
}
