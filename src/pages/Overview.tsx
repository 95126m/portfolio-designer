import { css, keyframes } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import image1 from '@/assets/aboutImg1.png'

const menuItems = [
  { title: 'ABOUT', path: '/about', className: 'about-section' },
  { title: 'CARRER', path: '/carrer', className: 'carrer-section' },
  { title: 'EDUCATION', path: '/education', className: 'education-section' },
  { title: 'SKILLS', path: '/skills', className: 'skills-section' },
]

const Overview = () => {
  const navigate = useNavigate()

  return (
    <div css={wrapperStyle}>
      <div css={titleWrapperStyle}>
        <div className="title-line" aria-hidden="true" />
        <span className="title">OVERVIEW</span>
        <p className="text">
          저에 대한 간략한 정보들을 담아봤습니다.
          <br />
          포트폴리오 사이트에 방문해주셔서 감사합니다.😸
        </p>
      </div>

      <div className="menu" css={menuWrapperStyle}>
        {menuItems.map((item, index) => (
          <motion.button
            key={item.path}
            type="button"
            className={`menu-card ${item.className}`}
            onClick={() => navigate(item.path)}
            aria-label={`${item.title} 페이지로 이동`}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeInOut' }}
          >
            <h1>{item.title}</h1>
            <ArrowCircleRightIcon css={arrowIconStyle} aria-hidden="true" />
          </motion.button>
        ))}
      </div>

      <img className="background-image" src={image1} alt="" aria-hidden="true" />
    </div>
  )
}

export default Overview

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 100vh;
  gap: 40px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

  .background-image {
    width: 1000px;
    max-width: none;
    height: auto;
    object-fit: cover;
    position: absolute;
    bottom: -55%;
    left: -15%;
    filter: blur(10px);
    z-index: 0;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    gap: 30px;

    .background-image {
      width: 850px;
      bottom: -30%;
      left: -30%;
    }
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    gap: 24px;
    padding-bottom: 60px;

    .background-image {
      width: 650px;
      bottom: -12%;
      left: -55%;
      filter: blur(12px);
    }
  }

  @media (max-width: 480px) {
    .background-image {
      width: 520px;
      bottom: -8%;
      left: -60%;
    }
  }
`

const titleWrapperStyle = css`
  width: 88%;
  height: 450px;
  padding-top: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  z-index: 1;

  .title-line {
    width: 1px;
    height: 200px;
    flex-shrink: 0;
    background-color: ${color.black};
  }

  .title {
    color: ${color.black};
    font-size: ${fontSize.sm};
  }

  .text {
    align-self: flex-end;
    text-align: right;
    margin: 0 100px 0 0;
    color: ${color.black};
    font-size: ${fontSize.xxxxs};
    line-height: 1.8;
  }

  @media (max-width: 1024px) {
    width: 92%;
    height: 360px;
    gap: 30px;

    .title-line { height: 150px; }
    .text { margin-right: 30px; }
  }

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    min-height: 275px;
    padding-top: 25px;
    gap: 24px;

    .title-line { height: 110px; }
    .title { font-size: 20px; }

    .text {
      align-self: center;
      text-align: center;
      margin: 0;
      font-size: 12px;
      line-height: 1.8;
      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 480px) {
    min-height: 240px;
    gap: 20px;
    .title-line { height: 90px; }
    .title { font-size: 18px; }
    .text { font-size: 11px; }
  }
`

const menuWrapperStyle = css`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 350px));
  justify-content: center;
  gap: 30px;
  width: 92%;
  max-width: 1490px;
  position: relative;
  z-index: 1;

  .menu-card {
    appearance: none;
    font-family: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    min-width: 0;
    height: 250px;
    padding: 0;
    border: 1px solid ${color.whiteGray};
    background-color: ${color.white};
    border-radius: 6px;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
    position: relative;
    cursor: pointer;

    h1 {
      margin: 0;
      color: ${color.whiteGray};
      font-size: ${fontSize.xxs};
      transition: color 0.3s ease-in-out;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: ${color.lightGray};
        background-color: ${color.lightGray};
        h1 { color: ${color.white}; }
      }
    }

    &:focus-visible {
      outline: 2px solid ${color.black};
      outline-offset: 3px;
      border-color: ${color.lightGray};
      background-color: ${color.lightGray};
      h1 { color: ${color.white}; }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 350px));
    gap: 20px;
    .menu-card { height: 220px; }
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    width: 90%;
    max-width: 520px;
    gap: 14px;
    .menu-card { height: 120px; }
  }

  @media (max-width: 480px) {
    .menu-card { height: 100px; }
  }
`

const arrowIconStyle = css`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 40px;
  color: transparent;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, color 0.3s ease-in-out, visibility 0.3s;
  pointer-events: none;

  /* 실제 마우스 Hover가 가능한 PC에서만 화살표가 나타남 */
  @media (hover: hover) and (pointer: fine) {
    .menu-card:hover & {
      opacity: 1;
      visibility: visible;
      color: ${color.white};
      animation: ${bounceAnimation} 1s infinite ease-in-out;
    }
  }

  /* 키보드 사용자를 위한 접근성 표시 */
  .menu-card:focus-visible & {
    opacity: 1;
    visibility: visible;
    color: ${color.white};
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
`
