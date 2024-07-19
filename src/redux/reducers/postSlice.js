// 상세보기 - 리뷰 삭제 슬라이스

import { createSlice } from '@reduxjs/toolkit';
import PostsData from '../../components/Review/Posts.json';

const postsSlice = createSlice({
  name: 'posts',
  initialState: PostsData,
  reducers: {
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
