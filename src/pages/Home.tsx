import { css, keyframes } from '@emotion/react'
import { useState } from 'react'
import { color, fontSize } from '@/theme/Theme'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Tooltip from '@/components/Tooltip'
import image1 from '@/assets/homeImg1.png'
import image2 from '@/assets/homeImg2.png'
import image3 from '@/assets/homeImg3.png'
import { motion } from 'framer-motion'

const Home = () => {
  const [isTooltip, setIsTooltip] = useState<boolean>(false)

  return (
    <div css={wrapperStyle}>
      <div className="text-section">
        <div css={firstItem}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
            VISUAL STORYTELLING
          </motion.h1>
          <motion.div
            css={iconWrapper}
            onMouseEnter={() => setIsTooltip(true)}
            onMouseLeave={() => setIsTooltip(false)}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
            <MusicNoteIcon />
            <Tooltip
              text="사용자의 가독성을 극대화하고 직관적인 정보 전달을<br/>최우선으로 고려하여 디자인합니다."
              isVisible={isTooltip}
            />
          </motion.div>
        </div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}>
          BOLD GRAPHICS
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}>
          SEAMLESS BLENDING
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}>
          HIGH-IMPACT
        </motion.h1>
        <motion.img
          src={image2}
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.2, ease: 'easeInOut' }}
        />
        <motion.img
          src={image1}
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.4, ease: 'easeInOut' }}
        />
        <motion.img
          src={image3}
          alt=""
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 1.7, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

export default Home

const headerHeight = 70

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
`

const wrapperStyle = css`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding-top: ${headerHeight}px;
  padding-left: 100px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;

  .text-section {
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    gap: 20px;
    position: relative;

    h1 {
      color: ${color.black};
      font-size: ${fontSize.xxxl};
      background-color: transparent;
    }

    h1:nth-of-type(1) {
      text-align: center;
      align-self: center;
      margin-right: 20px;
    }

    h1:nth-of-type(2) {
      text-align: right;
      align-self: flex-end;
      margin-right: 120px;
    }

    h1:nth-of-type(3) {
      text-align: right;
      align-self: flex-end;
      margin-right: 120px;
    }

    img:nth-of-type(1) {
      width: 250px;
      height: auto;
      object-fit: cover;
      animation: ${bounceAnimation} 1s infinite ease-in-out;
      transition: transform 0.3s ease-in-out;
      position: absolute;
      top: 15%;
      left: 13%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }

    img:nth-of-type(2) {
      width: 300px;
      height: auto;
      object-fit: cover;
      animation: ${bounceAnimation} 1s infinite ease-in-out;
      transition: transform 0.3s ease-in-out;
      position: absolute;
      bottom: 0;
      right: 6%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }

    img:nth-of-type(3) {
      width: 150px;
      height: auto;
      object-fit: cover;
      animation: ${bounceAnimation} 1s infinite ease-in-out;
      transition: transform 0.3s ease-in-out;
      position: absolute;
      top: 35%;
      left: 8%;
      transform: rotate(-10deg) translate(-50%, -50%);
      z-index: 0;
    }
  }
`

const firstItem = css`
  display: flex;
  align-items: center;
`

const iconWrapper = css`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 40px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: ${color.orange};
    }
  }
`
