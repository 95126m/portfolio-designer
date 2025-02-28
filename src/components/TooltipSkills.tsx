import { css } from '@emotion/react'
import { color } from '@/theme/Theme'

const TooltipSkills = ({ text, isVisible }: { text: string; isVisible: boolean }) => {
  return (
    <div
      css={[tooltipStyle, isVisible && visibleStyle]}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}

export default TooltipSkills

const tooltipStyle = css`
position: absolute;
  bottom: 0;
  left: 20px;
  background-color: ${color.gray};
  color: ${color.white};
  padding: 10px 10px;
  border-radius: 10px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transform: translateX(0); 
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out,
    transform 0.2s ease-in-out;
`

const visibleStyle = css`
  opacity: 1;
  visibility: visible;
  transform: translateX(10px); 
`

