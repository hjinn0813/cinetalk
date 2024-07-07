// 리뷰 상세보기 컴포넌트 구조
import React from 'react';
import '../../styles/Review/ReadPosts.scss';

export default function ReadPosts({ poster, title, date, body }) {
  return (
    <div className="r-container">
      <div className="r-box">
        <img className="poster" src={poster} alt={poster} />
        <div className="r-info">
          <div className="r_title">{title}</div>
          <div className="r_date">{date}</div>
          <div className="r_body">{body}</div>
        </div>
      </div>
    </div>
  );
}
