import { useEffect, useState } from 'react'
import { css, keyframes } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'
import CloseIcon from '@mui/icons-material/Close'

interface MenuProps {
  onClose: () => void
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const [isMenuClose, setIsMenuClose] = useState(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  const handleCloseMenu = () => {
    if (isMenuClose) return
    setIsMenuClose(true)
    window.setTimeout(onClose, 500)
  }

  const scrollToSection = (
    id: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault()
    const section = document.getElementById(id)
    handleCloseMenu()
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div css={[wrapperStyle, isMenuClose && fadeOut]} role="dialog" aria-modal="true" aria-label="사이트 메뉴">
      <button type="button" css={closeButtonStyle} onClick={handleCloseMenu} aria-label="메뉴 닫기">
        <CloseIcon />
      </button>
      <div css={contentStyle}>
        <div css={contactWrapper}>
          <h2>How to contact</h2>
          <span>Phone</span>
          <p>+82 010-6434-7370</p>
          <span>E-mail</span>
          <p>95126m@gmail.com</p>
        </div>
        <nav css={linkWrapper} aria-label="페이지 이동">
          <a href="#home" onClick={e => scrollToSection('home', e)}>HOME</a>
          <a href="#works" onClick={e => scrollToSection('works', e)}>WORKS</a>
          <a href="#popup" onClick={e => scrollToSection('popup', e)}>POPUP</a>
          <a href="#overview" onClick={e => scrollToSection('overview', e)}>OVERVIEW</a>
        </nav>
        <div css={emptySpaceStyle} aria-hidden="true">
          <div className="text-container">
            {Array.from({ length: 10 }, (_, i) => <span key={i}>WEBDESIGNER PORTFOLIO</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`
const fadeOutUp = keyframes`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-20px); }
`
const slideAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`
const fadeOut = css`
  animation: ${fadeOutUp} 0.5s ease-in-out forwards;
  pointer-events: none;
`

const wrapperStyle = css`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 9999;
  overflow: hidden;
  box-sizing: border-box;
`

const closeButtonStyle = css`
  position: absolute;
  top: 30px;
  right: 100px;
  z-index: 10;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${color.white};
  cursor: pointer;

  svg { font-size: 40px; transition: transform 0.6s ease; }
  &:hover svg { transform: rotate(180deg); }
  &:focus-visible { outline: 2px solid ${color.orange}; outline-offset: 6px; }

  @media (max-width: 1024px) { right: 40px; }
  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    svg { font-size: 32px; }
  }
`

const contentStyle = css`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
    padding-top: 90px;
    padding-bottom: 24px;
  }
`

const contactWrapper = css`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  padding: 0 24px 70px 100px;
  gap: 10px;
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-in-out 0.2s forwards;
  box-sizing: border-box;

  h2 {
    font-size: ${fontSize.xxxxxs};
    color: ${color.lightGray};
    margin: 0 0 10px;
    font-weight: inherit;
  }
  span, p { font-size: ${fontSize.xxxxs}; color: ${color.white}; margin: 0; overflow-wrap: anywhere; }

  @media (max-width: 1024px) { padding-left: 40px; padding-right: 16px; }
  @media (max-width: 768px) {
    flex: none;
    order: 2;
    padding: 28px 24px 30px;
    gap: 8px;
    border-top: 1px solid ${color.gray};
  }
`

const linkWrapper = css`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 90px 30px 90px 60px;
  border-left: 1px solid ${color.gray};
  gap: clamp(35px, 8vh, 100px);
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-in-out 0.4s forwards;
  box-sizing: border-box;

  a {
    display: inline-block;
    text-decoration: none;
    color: ${color.gray};
    font-size: ${fontSize.xl};
    font-weight: 700;
    line-height: 1.1;
    transition: color 0.6s ease-in-out;
    overflow-wrap: anywhere;
    &:hover, &:focus-visible { color: ${color.orange}; }
  }

  @media (max-width: 1024px) {
    padding-left: 36px;
    padding-right: 16px;
    a { font-size: clamp(30px, 4vw, 60px); }
  }
  @media (max-width: 768px) {
    flex: none;
    order: 1;
    width: 100%;
    border-left: 0;
    padding: 10px 24px 36px;
    gap: 27px;
    a { font-size: clamp(36px, 9vw, 54px); }
  }
`

const emptySpaceStyle = css`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 0 70px;
  border-left: 1px solid ${color.gray};
  position: relative;
  overflow: hidden;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-in-out 0.6s forwards;
  box-sizing: border-box;
  white-space: nowrap;
  pointer-events: none;

  .text-container {
    width: max-content;
    display: flex;
    animation: ${slideAnimation} 60s linear infinite;
  }
  span {
    flex: none;
    font-size: ${fontSize.xxxl};
    color: ${color.darkgray};
  }

  @media (max-width: 1024px) {
    flex: 0.65;
    span { font-size: clamp(28px, 4vw, 60px); }
  }
  @media (max-width: 768px) {
    flex: none;
    order: 3;
    width: 100%;
    min-height: 65px;
    padding: 10px 0;
    border-left: 0;
    border-top: 1px solid ${color.gray};
    align-items: center;
    span { font-size: 28px; }
  }
`
