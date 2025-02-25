import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'

const Education = () => {
  return (
    <div css={wrapperStyle}>
      <h1>Education</h1>
    </div>
  )
}

export default Education

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
