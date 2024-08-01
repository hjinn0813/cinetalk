// 리뷰 박스
import React from 'react';
import '../../styles/Main/ReviewBox.scss';

export default function ReviewBox({
  MovieName,
  PostTitle,
  trafficLight,
  author,
}) {
  return (
    <div className="main-box">
      <div className="main-movie-title">{MovieName}</div>
      <div className="main-post-title">{PostTitle}</div>
      <div className="main-author">
        <div className={`traffic-light ${trafficLight}`}></div>
        <div>{author} 님의 리뷰</div>
      </div>
    </div>
  );
}
