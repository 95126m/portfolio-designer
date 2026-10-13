import { css, keyframes } from '@emotion/react'
import { useState } from 'react'
import { color, fontSize } from '@/theme/Theme'
import Logo from '@/assets/logo4.png'
import Logo2 from '@/assets/logo6.png'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@/components/Menu'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div css={wrapperStyle}>
      <a href="#home" onClick={scrollToTop} css={imgWrapperStyle}>
        <img src={Logo} alt="Logo" css={logoStyle} />
        <img src={Logo2} alt="Logo" css={logoStyle2} />
      </a>

      <MenuIcon
        css={menuIconStyle}
        onClick={() => setIsMenuOpen(true)}
      />

      {isMenuOpen && <Menu onClose={() => setIsMenuOpen(false)} />}
    </div>
  )
}

export default Header

const wrapperStyle = css`
  /* PC 원본 디자인 유지 */
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

  /* 패딩이 전체 너비에 포함되도록 하여 넘침 방지 */
  box-sizing: border-box;
  top: 0;
  left: 0;
  right: 0;

  h1 {
    font-size: ${fontSize.sm};
    color: ${color.black};
    margin-left: 20px;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
    color: ${color.black};
    cursor: pointer;
  }

  /* 태블릿에서만 양쪽 여백 축소 */
  @media (max-width: 1024px) {
    padding: 0 40px;
  }

  /* 모바일에서는 로고 왼쪽, 메뉴 오른쪽 */
  @media (max-width: 768px) {
    height: 70px;
    padding: 0 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`

const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const imgWrapperStyle = css`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
`

const logoStyle = css`
  height: 30px;
  width: auto;
`

const logoStyle2 = css`
  height: 30px;
  width: auto;

  &:hover {
    animation: ${rotateAnimation} 2s linear infinite;
  }
`

const menuIconStyle = css`
  cursor: pointer;
  color: ${color.black};
  font-size: 40px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    font-size: 34px;
  }
`
