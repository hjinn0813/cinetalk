// 리뷰 박스
import React from 'react';
import '../../styles/Main/ReviewBox.scss';

export default function ReviewBox({ MovieName, PostTitle, author }) {
  return (
    <>
      <div className="main-box">
        <div className="main-movie-title">{MovieName}</div>
        <div className="main-post-title">{PostTitle}</div>
        <div className="main-author">{author}</div>
      </div>
    </>
  );
}
