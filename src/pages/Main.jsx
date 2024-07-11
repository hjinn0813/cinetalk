import React from 'react';
import '../styles/Main/Main.scss';
import ReviewBox from '../components/Main/ReviewBox';
import Reviews from '../components/Main/Reviews.json';
import Friends from '../components/Main/Friends.json';

export default function Main() {
  return (
    <section className="main-container">
      <div className="main-item">
        <div className="new">지금 뜨는 최신 글</div>
        <div className="card-list">
          {Reviews.map((review) => (
            <ReviewBox
              key={review.id}
              MovieName={review.Movie_Name}
              PostTitle={review.Post_Title}
              author={review.author}
            />
          ))}
        </div>
      </div>
      <div className="main-item">
        <div className="friends">내 친구는 지금</div>
        <div className="card-list">
          {Friends.map((review) => (
            <ReviewBox
              key={review.id}
              MovieName={review.Movie_Name}
              PostTitle={review.Post_Title}
              author={review.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
