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
      <a
        href="#home"
        onClick={scrollToTop} css={imgWrapperStyle}>
        <img
          src={Logo}
          alt="Logo"
          css={logoStyle}
        />
        <img
          src={Logo2}
          alt="Logo"
          css={logoStyle2}
        />
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
  width: 100%;
  height: 100px;
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 9;

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
`

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const imgWrapperStyle = css`
  display: flex;
  align-items: center;
`

const logoStyle = css`
  height: 30px;
`

const logoStyle2 = css`
  height: 30px;

  &:hover {
    animation: ${rotateAnimation} 2s linear infinite;
  }
`

const menuIconStyle = css`
  cursor: pointer;
  color: ${color.black};
  font-size: 40px;
`
