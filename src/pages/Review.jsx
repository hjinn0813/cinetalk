// 리뷰 상세보기 페이지

import React from 'react';
import { useParams } from 'react-router-dom';
import ReadPosts from '../components/Review/ReadPosts';
import PostsData from '../components/Review/Posts.json';
import '../styles/Review/Review.scss';

export default function Review() {
  const { id } = useParams();
  const post = PostsData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div class="r-wrap">
      <div class="rp-title">리뷰 상세보기</div>
      <ReadPosts
        poster={post.poster}
        title={post.title}
        date={post.date}
        body={post.body}
      />
    </div>
  );
}
