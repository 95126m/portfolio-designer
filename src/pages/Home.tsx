import { css } from '@emotion/react'

const Home = () => {
  return <div css={wrapperStyle}>메인 홈</div>
}

export default Home

const headerHeight = 70

const wrapperStyle = css`
  width: 100%;
  margin: 0 auto;
  padding-top: ${headerHeight}px;
  background-color: black;
`
