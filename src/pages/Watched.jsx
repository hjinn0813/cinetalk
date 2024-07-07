// 라이브러리 (개인의 리뷰 목록) 페이지
import React from 'react';
import { Link } from 'react-router-dom';
import WatchedPoster from '../components/Watched/WatchedPoster';
import LibraryLists from '../components/Watched/LibraryLists.json';
import '../styles/Watched/Watched.scss';

import poster1 from '../assets/Watched/poster1.jpg';
import poster2 from '../assets/Watched/poster2.jpg';
import poster3 from '../assets/Watched/poster3.jpg';
import poster4 from '../assets/Watched/poster4.jpg';
import poster5 from '../assets/Watched/poster5.jpg';
import poster6 from '../assets/Watched/poster6.jpg';
import poster7 from '../assets/Watched/poster7.jpg';
import poster8 from '../assets/Watched/poster8.jpg';
import poster9 from '../assets/Watched/poster9.jpg';

const posterImages = {
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
  poster9,
};

export default function Watched() {
  return (
    <div className="library-container">
      <div className="library-title">LIBRARY</div>
      <div className="library-list">
        {LibraryLists.map((card) => (
          <Link to="/Review">
            <WatchedPoster
              key={card.id}
              poster={posterImages[card.poster]}
              title={card.title}
              date={card.date}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
