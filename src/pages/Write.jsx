// 리뷰 작성하기 페이지

import React from 'react';
import Toggle from '../components/Write/toggle';
import '../styles/Write/Write.scss';

export default function Write() {
  return (
    <div className="write-container">
      <div className="w-title">리뷰 작성하기</div>
      <form className="write-input">
        <div className="title-area">
          <label>
            <div>리뷰제목</div>
            <input type="text" className="inputarea ipt-title" />
          </label>
        </div>
        <div className="body-area">
          <label>
            <div>리뷰본문</div>
            <textarea rows="5" cols="80" className="inputarea ipt-body" />
          </label>
        </div>
        <div className="date-area">
          <label>
            <div>
              관람일&nbsp;&nbsp;
              <input type="date" className="inputarea ipt-date" />
            </div>
          </label>
        </div>
        <div className="url-area">
          <label>
            <div>URL 추가</div>
            <input type="text" className="inputarea ipt-url" />
          </label>
        </div>

        <div className="write-toggle">
          <div className="tg-btn">
            스포일러 포함&nbsp;&nbsp;
            <Toggle />
          </div>
          <div className="tg-btn">
            비공개 여부&nbsp;&nbsp;
            <Toggle />
          </div>
        </div>
        <div className="apply">
          <button className="apply-btn">확인</button>
        </div>
      </form>
    </div>
  );
}
