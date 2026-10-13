
import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'

const Footer = () => {
  return (
    <footer css={wrapperStyle}>
      <p>©2026 YoungEun All Rights Reserved.</p>
    </footer>
  )
}

export default Footer

const wrapperStyle = css`
  /* ===== PC 기존 디자인 유지 ===== */
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 100px;
  box-sizing: border-box;

  background-color: ${color.gray};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${fontSize.xxxxxs};
    color: ${color.lightGray};
    margin: 0;
    text-align: center;
    line-height: 1.5;
  }

  /* ===== 태블릿 ===== */
  @media (max-width: 1024px) {
    height: 90px;
    padding: 0 40px;

    p {
      font-size: 12px;
    }
  }

  /* ===== 모바일 ===== */
  @media (max-width: 768px) {
    height: 75px;
    padding: 15px 20px;

    p {
      font-size: 11px;
      line-height: 1.6;
      overflow-wrap: break-word;
    }
  }

  /* ===== 작은 모바일 ===== */
  @media (max-width: 480px) {
    min-height: 70px;
    height: auto;
    padding: 20px 16px;

    p {
      font-size: 10px;
    }
  }
`
