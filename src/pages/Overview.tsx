import { css, keyframes } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import image1 from '@/assets/aboutImg1.png'

const Overview = () => {
  const navigate = useNavigate()

  const handleAbout = () => {
    navigate('/about')
  }

  const handleCarrer = () => {
    navigate('/carrer')
  }

  const handleEducation = () => {
    navigate('/education')
  }

  const handleSkills = () => {
    navigate('/skills')
  }

  return (
    <div css={wrapperStyle}>
      <div css={titleWrapperStyle}>
        <div></div>
        <span className="title">OVERVIEW</span>
        <p className="text">저에 대한 간략한 정보들을 담아봤습니다.<br/>포트폴리오 사이트에 방문해주셔서 감사합니다.😸</p>
      </div>

      <div
        className="menu"
        css={menuWrapperStyle}>
        <motion.div
          className="about-section"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}>
          <h1>ABOUT</h1>
          <ArrowCircleRightIcon
            css={arrowIconStyle}
            onClick={handleAbout}
          />
        </motion.div>
        <motion.div
          className="carrer-section"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}>
          <h1>CARRER</h1>
          <ArrowCircleRightIcon
            css={arrowIconStyle}
            onClick={handleCarrer}
          />
        </motion.div>
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}>
          <h1>EDUCATION</h1>
          <ArrowCircleRightIcon
            css={arrowIconStyle}
            onClick={handleEducation}
          />
        </motion.div>
        <motion.div
          className="skills-section"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 1.5, ease: 'easeInOut' }}>
          <h1>SKILLS</h1>
          <ArrowCircleRightIcon
            css={arrowIconStyle}
            onClick={handleSkills}
          />
        </motion.div>
      </div>

      <img
        src={image1}
        alt=""
      />
    </div>
  )
}

export default Overview

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
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

  img {
    width: 1000px;
    height: auto;
    object-fit: cover;
    position: absolute;
    bottom: -55%;
    left: -15%;
    filter: blur(10px);
    z-index: 0;
  }
`

const titleWrapperStyle = css`
  width: 88%;
  height: 450px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${color.black};
  gap: 40px;
  position: relative;

  div {
    width: 1px;
    height: 200px;
    background-color: ${color.black};
  }

  .title {
    color: ${color.black};
    font-size: ${fontSize.sm};
  }

  .text {
    align-slef: flex-end;
    text-align: right;
    margin-left: auto;
    margin-right: 100px;
    color: ${color.black};
    font-size: ${fontSize.xxxxs};
  }
`

const menuWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 30px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1960px;
  z-index: 1;

  .about-section,
  .carrer-section,
  .education-section,
  .skills-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 350px;
    height: 250px;
    border: 1px solid ${color.whiteGray};
    background-color: ${color.white};
    border-radius: 6px;
    transition: all 0.3s ease-in-out;
    position: relative;

    h1 {
      color: ${color.whiteGray};
      font-size: ${fontSize.xxs};
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      border: 1px solid ${color.lightGray};
      background-color: ${color.lightGray};

      h1 {
        color: ${color.white};
      }
    }
  }
`

const arrowIconStyle = css`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 40px;
  color: transparent;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  .about-section:hover &,
  .carrer-section:hover &,
  .education-section:hover &,
  .skills-section:hover & {
    animation: ${bounceAnimation} 1s infinite ease-in-out;
    color: ${color.white};
  }
`
