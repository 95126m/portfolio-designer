import { useState } from 'react'
import { css, keyframes } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'
import CloseIcon from '@mui/icons-material/Close'

interface MenuProps {
  onClose: () => void
}
const Modal: React.FC<MenuProps> = ({ onClose }) => {
  const [isMenuClose, setIsMenuClose] = useState<boolean>(false)

  const handleCloseMenu = () => {
    setIsMenuClose(true)
    setTimeout(onClose, 500)
  }

  return (
    <div css={[wrapperStyle, isMenuClose && fadeOut]}>
      <CloseIcon
        onClick={handleCloseMenu}
        css={closeIconStyle}
      />
      <div css={contentStyle}>
        <div css={contactWrapper}>
          <h1>How to contact</h1>
          <span>Phone</span>
          <p>+82 010-6434-7370</p>
          <span>E-mail</span>
          <p>95126m@gmail.com</p>
        </div>
        <div css={linkWrapper}>
          <a href="">
            <h1>HOME</h1>
          </a>
          <a href="">
            <h1>WORKS</h1>
          </a>
          <a href="">
            <h1>OVERVIEW</h1>
          </a>
        </div>
        <div css={emptySpaceStyle}>
          <div className="text-container">
            <h1>WEBDESIGNER PORTFOLIO</h1>
            <h1>WEBDESIGNER PORTFOLIO</h1>
            <h1>WEBDESIGNER PORTFOLIO</h1>
            <h1>WEBDESIGNER PORTFOLIO</h1>
            <h1>WEBDESIGNER PORTFOLIO</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

const wrapperStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* safari 용 */
`

const closeIconStyle = css`
  position: absolute;
  top: 30px;
  right: 0;
  font-size: 40px;
  cursor: pointer;
  color: ${color.white};
  margin-right: 100px;
  transition: transform 0.6s ease;
  z-index: 9;

  &:hover {
    transform: rotate(180deg);
  }
`

const contentStyle = css`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  h1 {
    color: ${color.gray};
    font-size: ${fontSize.xl};
  }
`
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeOutUp = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(0);
  }
`

const fadeOut = css`
  animation: ${fadeOutUp} 0.5s ease-in-out forwards;
`

const contactWrapper = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  padding: 670px 0 0 100px;
  gap: 10px;
  opacity: 0;
  transform: translateX(-30px);
  animation: ${fadeInUp} 0.6s ease-in-out forwards;
  animation-delay: 0.2s;

  &.fade-out {
    animation: ${fadeOutUp} 0.8s ease-in-out forwards;
    animation-delay: 0.2s;
  }

  h1 {
    transition: color 0.6s ease-in-out;
    font-size: ${fontSize.xxxxxs};
    color: ${color.lightGray};
    margin: 0 0 10px 0;
  }

  span,
  p {
    font-size: ${fontSize.xxxxs};
    color: ${color.white};
  }
`

const linkWrapper = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 300px 600px 300px 60px;
  border-left: 1px solid ${color.gray};
  gap: 100px;
  opacity: 0;
  transform: translateX(-30px);
  animation: ${fadeInUp} 0.8s ease-in-out forwards;
  animation-delay: 0.4s;

  &.fade-out {
    animation: ${fadeOutUp} 0.5s ease-in-out forwards;
    animation-delay: 0.4s;
  }

  h1 {
    transition: color 0.6s ease-in-out;
  }

  h1:hover {
    color: ${color.orange};
  }
`

const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`

const emptySpaceStyle = css`
  border-left: 1px solid ${color.gray};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 770px 0 0 100px;
  opacity: 0;
  transform: translateX(-30px);
  animation: ${fadeInUp} 0.8s ease-in-out forwards;
  animation-delay: 0.6s;
  overflow: hidden;
  z-index: 1;
  position: relative;
  width: 100%;
  white-space: nowrap;

  .text-container {
    display: flex;
    width: max-content;
    animation: ${slideAnimation} 60s linear infinite;
  }

  h1 {
    color: ${color.darkgray};
    font-size: ${fontSize.xxxl};
    margin-right: 0;
  }
`
