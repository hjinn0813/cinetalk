// 상세보기, 라이브러리 - 리뷰 삭제 슬라이스

import { createSlice } from '@reduxjs/toolkit';
import PostsData from '../../components/Review/Posts.json';
import LibraryLists from '../../components/Watched/LibraryLists.json';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: PostsData,
    lists: LibraryLists,
  },
  reducers: {
    deletePosts: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    deleteLists: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { deletePosts, deleteLists } = postsSlice.actions;
export default postsSlice.reducer;
