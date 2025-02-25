import { css } from '@emotion/react'
import { color } from '@/theme/Theme'

const Tooltip = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  return (
    <div
      css={[tooltipStyle, isVisible && visibleStyle]}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default Tooltip

const tooltipStyle = css`
  position: absolute;
  bottom: 100%;
  left: 2vw;
  transform: translateX(0);
  background-color: ${color.orange};
  color: ${color.white};
  padding: 14px 14px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.8s ease-in-out,
    transform 0.2s ease-in-out;
`

const visibleStyle = css`
  opacity: 1;
  visibility: visible;
  transform: translateX(10px);
`
