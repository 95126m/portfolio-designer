import { css } from '@emotion/react'
import { useState } from 'react'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'
import Tooltip from '@/components/TooltipSkills'
import VerifiedIcon from '@mui/icons-material/Verified'

const Skills = () => {
  const [isTooltip, setIsTooltip] = useState<{ [key: string]: boolean }>({
    photoshop: false,
    illustrator: false
  })

  return (
    <div css={wrapperStyle}>
      <motion.div
        css={leftSectionStyle}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}>
        <p>OVERVIEW</p>
        <h1>SKILLS</h1>
      </motion.div>

      <div css={rightSectionsStyle}>
        <motion.div
          css={firstSecondSectionStyle}
          className="first-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}>
          <span>Designer</span>
          <h1>
            디자인 할 때 이런 스킬들을
            <br />
            사용할 수 있어요!
          </h1>
          <div css={textWrapperStyle}>
            <div css={skillItemStyle}>
              <p>Photoshop</p>
              <div
                css={iconWrapper}
                onMouseEnter={() =>
                  setIsTooltip({ photoshop: true, illustrator: false })
                }
                onMouseLeave={() => setIsTooltip({ photoshop: false })}>
                <VerifiedIcon css={iconStyle} />
                <Tooltip
                  text="GTQ 1급 취득"
                  isVisible={isTooltip.photoshop}
                />
              </div>
            </div>

            <div css={skillItemStyle}>
              <p>Illustrator</p>
              <div
                css={iconWrapper}
                onMouseEnter={() =>
                  setIsTooltip({ photoshop: false, illustrator: true })
                }
                onMouseLeave={() => setIsTooltip({ illustrator: false })}>
                <VerifiedIcon css={iconStyle} />
                <Tooltip
                  text="GTQA 1급 취득"
                  isVisible={isTooltip.illustrator}
                />
              </div>
            </div>

            <div css={skillItemStyle}>
              <p>Figma</p>
            </div>
            <div css={skillItemStyle}>
              <p>Shotcut</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          css={firstSecondSectionStyle}
          className="second-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}>
          <span>Front-end</span>
          <h1>
            개발 할 때 이런 스킬들을
            <br />
            사용할 수 있어요!
          </h1>
          <div css={textWrapperStyle2}>
            <div css={skillItemStyle}>
              <p>Html</p>
            </div>
            <div css={skillItemStyle}>
              <p>Css</p>
            </div>
            <div css={skillItemStyle}>
              <p>Javascript</p>
            </div>
            <div css={skillItemStyle}>
              <p>Typescript</p>
            </div>
            <div css={skillItemStyle}>
              <p>React</p>
            </div>
            <div css={skillItemStyle}>
              <p>Next JS</p>
            </div>
            <div css={skillItemStyle}>
              <p>Zustand</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

const wrapperStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.opacity80};
`

const leftSectionStyle = css`
  width: 35%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  p {
    font-size: ${fontSize.xxxxxs};
    color: ${color.orange};
  }
  h1 {
    font-size: ${fontSize.lg};
    color: ${color.white};
  }
`

const rightSectionsStyle = css`
  width: 65%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  z-index: 0;
`

const firstSecondSectionStyle = css`
  @keyframes glowing {
    0% {
      box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0);
    }
    50% {
      box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0.4);
    }
    100% {
      box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0);
    }
  }

  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  animation: glowing 2s infinite ease-in-out;
  background-color: ${color.white};
  position: relative;
  z-index: 1;
  overflow: visible;

  span {
    font-size: ${fontSize.xxxxs};
    color: ${color.white};
    background-color: ${color.orange};
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    margin-bottom: 20px;
  }

  h1 {
    font-size: ${fontSize.xxs};
    color: ${color.orange};
    padding: 60px 0;
  }

  p {
    font-size: ${fontSize.xxxxs};
    color: ${color.black};
  }
`

const textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const textWrapperStyle2 = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`

const skillItemStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  font-size: ${fontSize.xxxs};
  color: ${color.black};

  &:hover {
    color: ${color.orange};
  }
`

const iconWrapper = css`
  position: relative;
  display: inline-flex;
  align-items: center;
`

const iconStyle = css`
  cursor: pointer;
  font-size: 18px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${color.orange};
  }
`
