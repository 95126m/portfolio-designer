import { css, keyframes } from '@emotion/react'
import { useEffect, useState } from 'react'
import { color, fontSize } from '@/theme/Theme'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import Tooltip from '@/components/Tooltip'
import image1 from '@/assets/homeImg1.png'
import image2 from '@/assets/homeImg2.png'
import image3 from '@/assets/homeImg3.png'
import { motion } from 'framer-motion'

// PC 디자인 유지. 1024px 이하에서는 1440 × 800 캔버스 비례 축소.
const DESIGN_WIDTH = 1440
const DESIGN_HEIGHT = 800
const MOBILE_BREAKPOINT = 1024
const PHONE_BREAKPOINT = 768
const MOBILE_TOP_OFFSET = 60

const Home = () => {
  const [isTooltip, setIsTooltip] = useState<boolean>(false)
  const [viewportWidth, setViewportWidth] = useState<number>(() =>
    typeof window === 'undefined' ? DESIGN_WIDTH : window.innerWidth
  )

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isCompact = viewportWidth <= MOBILE_BREAKPOINT
  const isPhone = viewportWidth <= PHONE_BREAKPOINT
  const scale = isCompact ? viewportWidth / DESIGN_WIDTH : 1
  const topOffset = isPhone ? MOBILE_TOP_OFFSET : 0

  return (
    <div
      css={responsiveViewportStyle}
      style={
        isCompact
          ? {
              height: DESIGN_HEIGHT * scale + topOffset,
              paddingTop: topOffset
            }
          : undefined
      }
    >
      <div
        css={wrapperStyle}
        className={isCompact ? 'scaled-home' : undefined}
        style={isCompact ? { transform: `scale(${scale})` } : undefined}
      >
        {/* Framer Motion은 바깥 래퍼의 opacity / x 담당,
            떠다니는 CSS 애니메이션은 안쪽 img 담당: transform 충돌 방지 */}
        <div className="image-layer" aria-hidden="true">
          <motion.div
            className="deco-position deco-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: 'easeInOut' }}
          >
            <img className="deco-image" src={image2} alt="" />
          </motion.div>
          <motion.div
            className="deco-position deco-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: 'easeInOut' }}
          >
            <img className="deco-image" src={image1} alt="" />
          </motion.div>
          <motion.div
            className="deco-position deco-3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.7, ease: 'easeInOut' }}
          >
            <img className="deco-image" src={image3} alt="" />
          </motion.div>
        </div>

        <div className="text-section">
          <div css={firstItem}>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
            >
              VISUAL STORYTELLING
            </motion.h1>
            <motion.div
              css={iconWrapper}
              onMouseEnter={() => setIsTooltip(true)}
              onMouseLeave={() => setIsTooltip(false)}
              onClick={() => setIsTooltip(prev => !prev)}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
            >
              <MusicNoteIcon />
              <Tooltip
                text="사용자의 가독성을 극대화하고 직관적인 정보 전달을<br/>최우선으로 고려하여 디자인합니다."
                isVisible={isTooltip}
                css={toolTipStyle}
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
          >
            BOLD GRAPHICS
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}
          >
            SEAMLESS BLENDING
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}
          >
            HIGH-IMPACT
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Home

const headerHeight = 70

const bounceAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`

const responsiveViewportStyle = css`
  display: contents;

  @media (max-width: 1024px) {
    display: block;
    position: relative;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
`

const wrapperStyle = css`
  /* 기존 PC 화면 영역 / 텍스트 / 이미지 좌표 유지 */
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: ${headerHeight}px;
  padding-left: 100px;
  padding-right: 24px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;

  .image-layer {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
  }

  .deco-position {
    position: absolute;
    height: auto;
    pointer-events: none;
    will-change: opacity, transform;
  }

  .deco-image {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    animation: ${bounceAnimation} 1s infinite ease-in-out;
    pointer-events: none;
  }

  .deco-1 {
    width: clamp(140px, 18vw, 250px);
    top: clamp(470px, 15vh, 160px);
    left: clamp(25vw, 13vw, 180px);
    z-index: 0;
  }

  .deco-2 {
    width: clamp(600px, 22vw, 300px);
    right: clamp(1px, 1vw, 1px);
    bottom: clamp(1px, 1vh, 1px);
    z-index: 1;
  }

  .deco-3 {
    width: clamp(700px, 10vw, 150px);
    bottom: clamp(30vh, 100vh, 500px);
    left: clamp(12px, 80vw, 1px);
    z-index: 0;
  }

  .text-section {
    width: 100%;
    max-width: 1400px;
    min-height: 520px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    gap: 20px;
    position: relative;
    z-index: 2;

    h1 {
      color: ${color.black};
      font-size: ${fontSize.xxxl};
      line-height: 1.05;
      background-color: transparent;
      word-break: keep-all;
      position: relative;
      z-index: 2;
      margin: 0;
      text-align: left;
      align-self: flex-start;
    }

    h1:nth-of-type(1),
    h1:nth-of-type(2),
    h1:nth-of-type(3),
    h1:nth-of-type(4) {
      text-align: left;
      align-self: flex-start;
      margin-right: 0;
    }
  }

  @media (max-width: 1024px) {
    &.scaled-home {
      width: ${DESIGN_WIDTH}px;
      height: ${DESIGN_HEIGHT}px;
      min-height: ${DESIGN_HEIGHT}px;
      margin: 0;
      transform-origin: top left;

      .text-section {
        width: 100%;
        min-height: 520px;
        gap: 20px;
        flex-shrink: 0;

        h1 {
          font-size: ${fontSize.xxxl};
          line-height: 1.05;
          white-space: nowrap;
        }
      }

      .deco-1 {
        width: 250px;
        top: 470px;
        left: 360px;
      }

      .deco-2 {
        width: 600px;
        right: 1px;
        bottom: 1px;
      }

      .deco-3 {
        width: 700px;
        bottom: 500px;
        left: 12px;
      }
    }
  }
`

const firstItem = css`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 2;
`

const iconWrapper = css`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 3;

  svg {
    cursor: pointer;
    font-size: 40px;
    transition: color 0.3s ease-in-out;

    &:hover { color: ${color.orange}; }
  }
`

const toolTipStyle = css`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-10%);
  z-index: 10;
  white-space: nowrap;
`
