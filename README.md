<div align=left>

# '시네톡 | Cinetalk' 사이트 제작

<br>
<p align=center><img src="https://github.com/hjinn0813/cinetalk/blob/devel/src/assets/logo.png" width="300"></p>
<br>
토이 프로젝트로 만든 영화 리뷰 기록 및 공유 사이트 '시네톡'입니다.
<br>
<br>

## 💻 배포 주소

https://github.com/hjinn0813/cinetalk
<br>
<br>

## 👨‍🏫 프로젝트 소개

- **기획 배경** :

영화를 보고 리뷰를 기록하는게 취미인데, '리뷰'에 중점을 둔 커뮤니티는 없다고 느꼈다.

→ 그렇다면 직접 만들어보자는 생각으로, 영화 리뷰 기록 및 공유 사이트 '시네톡' 제작

- **개발기간 및 과정**

  - 2024.07.01 ~ 07.04 : 기획

  - 2024.07.03 ~ : 개발

<br>

## 🎬 주요 기능

### Main page

- Header에서 로그인 여부 검증하여 다른 아이콘 출력 (로컬 스토리지)

- 최신 리뷰, 친구들의 리뷰 보여주기 (swiper slide)

### 로그인

- 테스트용 아이디, 비번 검증하여 로그인 (Redux 상태관리)

  - 아이디와 비번이 일치하지 않으면 input창 아래에 메시지 등장

- `회원가입` 버튼 라우팅 설정

### 회원가입

- 아이디, 비번 유효성검사가 실시간으로 값을 받아와서 진행

- 이용약관 '모두 동의하기' 체크박스 기능

- 입력한 정보가 모두 저장되어 `마이 페이지`에서 보여지도록 설정 (Redux 상태관리)

### 마이 페이지

- 유저명, 라이브러리 등 개인화 서비스 제공

- `라이브러리`, `리뷰 작성하기` 클릭하면 페이지 이동

- `로그아웃` 버튼 기능 구현 (로컬 스토리지)

### 라이브러리 (개인의 기록)

- 개인이 작성한 리뷰 내역 확인 가능

- 특정 리뷰 클릭하면 해당하는 `리뷰 상세보기`로 이동

### 리뷰 상세보기

- 포스터, 영화제목, 작성일, 본문 등 확인 가능

- `좋아요` 버튼 기능

- `공유하기` 버튼 클릭시 URL 주소 자동 복사

### 리뷰 작성하기

- 제목, 본문, URL 주소, 작성일 등 입력 가능

- 사진 첨부 및 미리보기 기능 (1장)

- 스포일러 여부, 비공개 여부 toggle 버튼

### 검색 페이지

- 영화진흥위원회의 영화목록 API를 이용해 작품 검색 가능

  (input에 값을 입력하고 Enter를 누르면 해당하는 검색값 등장)

<br>

## 🛠 기술 스택

- **Frontend**

  ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=Sass&logoColor=white)
  ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=white)
  ![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white)
  ![Swiper](https://img.shields.io/badge/swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)

- **Version Control**

  ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
  ![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)

- **Development Tool**

  ![VScode](https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

- **Design Tool**

  ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

<br>

## 📌 API

- **영화진흥위원회 - 영화목록 조회 OPEN API**

  - 영화명, 감독명 등 키워드로 검색 가능

<br>

## 📁 프로젝트 구조

```bash

```

---

### 📢 해당 사이트 제작에 사용한 모든 이미지의 저작권은 소유자에게 있으며, 학습용으로 사용했음을 알립니다.
