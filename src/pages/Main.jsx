import React from 'react';
import ReviewBox from '../components/Main/ReviewBox';
import '../styles/Main/Main.scss';

export default function Main() {
  const reviews = [
    { id: 1, MovieName: 'a', PostTitle: 'a', author: 'a' },
    { id: 2, MovieName: 'b', PostTitle: 'b', author: 'b' },
    { id: 3, MovieName: 'c', PostTitle: 'c', author: 'c' },
    { id: 4, MovieName: 'd', PostTitle: 'd', author: 'd' },
    { id: 5, MovieName: 'e', PostTitle: 'e', author: 'e' },
    { id: 6, MovieName: 'f', PostTitle: 'f', author: 'f' },
    // 추가 리뷰들
  ];

  return (
    <div>
      <section className="main-container">
        <div className="main-item">
          <div className="new">지금 뜨는 최신 글</div>
          <div className="card-list">
            {reviews.map((review) => (
              <ReviewBox
                key={review.id}
                MovieName={review.MovieName}
                PostTitle={review.PostTitle}
                author={review.author}
              />
            ))}
          </div>
        </div>
        <div className="main-item">
          <div className="friends">내 친구는 지금</div>
          <div className="card-list">
            {reviews.map((review) => (
              <ReviewBox
                key={review.id}
                MovieName={review.MovieName}
                PostTitle={review.PostTitle}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
