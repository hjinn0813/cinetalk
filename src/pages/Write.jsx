// 리뷰 작성하기 페이지

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addPost } from '../redux/reducers/postSlice';
import Toggles from '../components/Write/Toggles';
import '../styles/Write/Write.scss';

export default function Write() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');
  const [img, setImg] = useState(null);
  const [spoiler, setSpoiler] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImg(URL.createObjectURL(file));
    }
  };

  const handleImgRemove = () => {
    setImg(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // 새 리뷰 객체 생성
    const newPost = {
      id: Date.now(), // 고유 ID 생성
      title,
      body,
      date,
      url,
      poster: img ? img : 'default_poster',
      spoiler,
      isPrivate,
    };

    /* Redux에 새 리뷰 추가 */
    // dispatch(addPost(newPost));

    // 폼 초기화
    setTitle('');
    setBody('');
    setDate('');
    setUrl('');
    setImg(null);
    setSpoiler(false);
    setIsPrivate(false);

    alert('리뷰가 등록되었습니다!🙌');

    navigate(`/Review/${newPost.id}`);
  };

  return (
    <div className="write-container">
      <div className="w-title">리뷰 작성하기</div>
      <form className="write-input" onSubmit={handleSubmit}>
        <div className="title-area">
          <label>
            <div>리뷰제목</div>
            <input
              type="text"
              className="inputarea ipt-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="body-area">
          <label>
            <div>리뷰본문</div>
            <textarea
              rows="5"
              cols="80"
              className="inputarea ipt-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </label>
        </div>
        <div className="date-area">
          <label>
            <div>
              관람일&nbsp;&nbsp;
              <input
                type="date"
                className="inputarea ipt-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </label>
        </div>
        <div className="url-area">
          <label>
            <div>URL 추가</div>
            <input
              type="text"
              className="inputarea ipt-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
        </div>
        <div className="img-upload-area">
          <div>사진 첨부</div>
          <label htmlFor="ipt-img" className="choose-img">
            찾기
          </label>
          <input
            type="file"
            accept="image/*"
            id="ipt-img"
            onChange={handleImgChange}
          />
        </div>
        {img && (
          <div className="img-preview-area">
            <img src={img} alt="Preview" className="img-preview" />
            <button
              type="button"
              className="img-delete"
              onClick={handleImgRemove}
            >
              삭제
            </button>
          </div>
        )}

        <div className="write-toggle">
          <div className="tg-btn">
            스포일러 포함&nbsp;&nbsp;
            <Toggles checked={spoiler} onChange={() => setSpoiler(!spoiler)} />
          </div>
          <div className="tg-btn">
            비공개 여부&nbsp;&nbsp;
            <Toggles
              checked={isPrivate}
              onChange={() => setIsPrivate(!isPrivate)}
            />
          </div>
        </div>
        <div className="apply">
          <button className="apply-btn">확인</button>
        </div>
      </form>
    </div>
  );
}
