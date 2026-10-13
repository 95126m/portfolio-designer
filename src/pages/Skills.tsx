import { useState } from 'react'
import { css, keyframes } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'
import Tooltip from '@/components/TooltipSkills'
import VerifiedIcon from '@mui/icons-material/Verified'

const Skills = () => {
  const [activeTooltip, setActiveTooltip] = useState<'photoshop' | 'illustrator' | null>(null)

  const toggleTooltip = (skill: 'photoshop' | 'illustrator') => {
    setActiveTooltip((current) => (current === skill ? null : skill))
  }

  return (
    <div css={wrapperStyle}>
      <motion.div
        css={leftSectionStyle}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}
      >
        <p>OVERVIEW</p>
        <h1>SKILLS</h1>
      </motion.div>

      <div css={rightSectionsStyle}>
        <motion.div
          css={firstSecondSectionStyle}
          className="first-section"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
        >
          <span className="card-label">Designer</span>
          <h1>
            디자인 할 때 이런 스킬들을
            <br />
            사용할 수 있어요!
          </h1>
          <div css={textWrapperStyle}>
            <div css={skillItemStyle}>
              <p>Photoshop</p>
              <div css={iconWrapper}>
                <button
                  type="button"
                  css={certificateButtonStyle}
                  aria-label="Photoshop 자격증 보기"
                  aria-expanded={activeTooltip === 'photoshop'}
                  onMouseEnter={() => setActiveTooltip('photoshop')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onBlur={() => setActiveTooltip(null)}
                  onClick={() => toggleTooltip('photoshop')}
                >
                  <VerifiedIcon css={iconStyle} />
                </button>
                <Tooltip text="GTQ 1급 취득" isVisible={activeTooltip === 'photoshop'} />
              </div>
            </div>

            <div css={skillItemStyle}>
              <p>Illustrator</p>
              <div css={iconWrapper}>
                <button
                  type="button"
                  css={certificateButtonStyle}
                  aria-label="Illustrator 자격증 보기"
                  aria-expanded={activeTooltip === 'illustrator'}
                  onMouseEnter={() => setActiveTooltip('illustrator')}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onBlur={() => setActiveTooltip(null)}
                  onClick={() => toggleTooltip('illustrator')}
                >
                  <VerifiedIcon css={iconStyle} />
                </button>
                <Tooltip text="GTQA 1급 취득" isVisible={activeTooltip === 'illustrator'} />
              </div>
            </div>
            <div css={skillItemStyle}><p>Figma</p></div>
            <div css={skillItemStyle}><p>Premiere Pro</p></div>
          </div>
        </motion.div>

        <motion.div
          css={firstSecondSectionStyle}
          className="second-section"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        >
          <span className="card-label">Front-end</span>
          <h1>
            개발 할 때 이런 스킬들을
            <br />
            사용할 수 있어요!
          </h1>
          <div css={textWrapperStyle2}>
            {['Html', 'Css', 'Javascript', 'Typescript', 'React', 'Next JS', 'Zustand'].map((skill) => (
              <div key={skill} css={skillItemStyle}><p>{skill}</p></div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

const glowing = keyframes`
  0%, 100% { box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0); }
  50% { box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0.4); }
`

const wrapperStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;
  background-color: ${color.opacity80};
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const leftSectionStyle = css`
  width: 35%;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 24px;
  text-align: center;

  p {
    font-size: ${fontSize.xxxxxs};
    color: ${color.orange};
  }
  h1 {
    font-size: ${fontSize.lg};
    color: ${color.white};
    overflow-wrap: anywhere;
  }

  @media (max-width: 1200px) {
    width: 30%;
    padding: 40px 18px;
    h1 { font-size: clamp(25px, 3vw, 44px); }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 0;
    padding: 72px 20px 38px;
    gap: 8px;
    h1 { font-size: clamp(30px, 9vw, 44px); }
  }
`

const rightSectionsStyle = css`
  width: 65%;
  min-width: 0;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 400px));
  justify-content: center;
  align-content: center;
  align-items: stretch;
  gap: 40px;
  padding: 48px 32px;

  @media (max-width: 1400px) {
    gap: 22px;
    padding: 40px 22px;
  }

  @media (max-width: 1200px) {
    width: 70%;
    grid-template-columns: minmax(0, 450px);
    gap: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: minmax(0, 500px);
    padding: 12px 20px 72px;
    gap: 24px;
  }

  @media (max-width: 380px) {
    padding-left: 14px;
    padding-right: 14px;
  }
`

const firstSecondSectionStyle = css`
  width: 100%;
  min-width: 0;
  min-height: 500px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  animation: ${glowing} 2s infinite ease-in-out;
  background-color: ${color.white};
  position: relative;
  z-index: 1;
  overflow: visible;
  padding: 0 24px 40px;

  .card-label {
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
    padding: 48px 0;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  p {
    font-size: ${fontSize.xxxxs};
    color: ${color.black};
  }

  @media (max-width: 1400px) {
    padding-left: 18px;
    padding-right: 18px;
    h1 { padding: 38px 0; }
  }

  @media (max-width: 768px) {
    min-height: 0;
    padding: 0 22px 38px;
    border-radius: 16px;
    h1 {
      font-size: clamp(16px, 4.5vw, 20px);
      padding: 28px 0 34px;
    }
    p { font-size: 14px; }
  }

  @media (max-width: 380px) {
    padding-left: 12px;
    padding-right: 12px;
    h1 { font-size: 16px; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const textWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const textWrapperStyle2 = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

const skillItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  color: ${color.black};

  &:hover, &:focus-within {
    color: ${color.orange};
  }
`

const iconWrapper = css`
  position: relative;
  display: inline-flex;
  align-items: center;
`

const certificateButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 0;
  background: transparent;
  color: ${color.black};
  cursor: pointer;
  border-radius: 50%;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:focus-visible { color: ${color.orange}; }
  &:focus-visible { outline: 2px solid ${color.orange}; outline-offset: 2px; }
`

const iconStyle = css`
  font-size: 18px;
  transition: color 0.3s ease-in-out;
`
