import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'

const Footer = () => {
  return (
    <div css={wrapperStyle}>
      <p>©2025 YoungEun All Rights Reserved.</p>
    </div>
  )
}

export default Footer

const wrapperStyle = css`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 100px;
  background-color: ${color.gray};
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${fontSize.xxxxxs};
    color: ${color.lightGray};
  }
`
