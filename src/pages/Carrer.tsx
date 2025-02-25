import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'

const Carrer = () => {
  return (
    <div css={wrapperStyle}>
      <h1>Carrer</h1>
    </div>
  )
}

export default Carrer

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    color: ${color.black};
  }
`
