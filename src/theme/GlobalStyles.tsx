/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      @font-face {
        font-family: 'Freesentation-9Black';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2')
          format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
          format('woff');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'STUNNING-Bd';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-2@1.0/STUNNING-Bd.woff2')
          format('woff2');
        font-weight: normal;
        font-style: normal;
      }

      /* 1. 기본 초기화 */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      /* 2. HTML 및 body 설정 */
      html,
      body {
        width: 100%;
        height: 100%;
        font-size: 16px;
        font-family: 'Freesentation-9Black', sans-serif;
        line-height: 1.5;
        background-color: #ffffff;
        color: #000000;
      }

      /* 3. 링크 스타일 초기화 */
      p,
      div,
      a {
        text-decoration: none;
      }

      a {
        color: inherit;
        font-family: 'S-CoreDream-3Light';
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: 'STUNNING-Bd', 'Roboto';
      }

      /* 4. 리스트 스타일 초기화 */
      ul,
      ol {
        list-style: none;
      }

      /* 5. 버튼 초기화 */
      button {
        all: unset;
        cursor: pointer;
      }

      /* 6. 입력 요소 초기화 */
      input,
      textarea {
        border: none;
        outline: none;
        font-family: inherit;
      }

      /* 7. 이미지 기본 스타일 */
      img {
        max-width: 100%;
        display: block;
      }
    `}
  />
)

export default GlobalStyles
