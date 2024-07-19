// 라이브러리 (개인의 리뷰 목록) 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WatchedPoster from '../components/Watched/WatchedPoster';
import '../styles/Watched/Watched.scss';

export default function Watched() {
  const posts = useSelector((state) => state.posts.posts);

  return (
    <div className="library-container">
      <div className="library-title">LIBRARY</div>
      <div className="library-list">
        {posts.length === 0 ? (
          <div>해당 리뷰가 없습니다!😭</div>
        ) : (
          posts.map((card) => (
            <Link key={card.id} to={`/Review/${card.id}`} className="movingbtn">
              <WatchedPoster
                key={card.id}
                poster={require(`../assets/Watched/${card.poster}.jpg`)}
                title={card.title}
                date={card.date}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
