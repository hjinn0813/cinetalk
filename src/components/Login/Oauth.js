export const REDIRECT_URI = 'process.env.REACT_APP_REDIRECT_URI'; //Redirect URI

export const KAKAO_api_key = 'process.env.REACT_APP_KAKAO_API'; //REST API KEY
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_api_key}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const NAVER_api_key = 'process.env.REACT_APP_NAVER_API';
export const STATE = 'false';
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_api_key}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;
