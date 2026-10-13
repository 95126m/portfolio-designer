import { css, keyframes } from '@emotion/react'
import { motion } from 'framer-motion'
import { color, fontSize } from '@/theme/Theme'

const Education = () => {
  return (
    <div css={wrapperStyle}>
      <motion.div
        css={leftSectionStyle}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}>
        <p>OVERVIEW</p>
        <h1>EDUCATION</h1>
      </motion.div>

      <div css={rightSectionsStyle}>
        <motion.div
          css={firstSecondSectionStyle}
          className="first-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}>
          <p>Fast Campus</p>
          <h1>
            김민태의 프론트엔드
            <br />
            데브캠프 1기
          </h1>
          <p>
            Html, Css, Javascript, React, Typescript 등 전반적인 프론트엔드
            스킬을 배웠습니다.
            <br />
            2개의 개인프로젝트, 2개의 팀프로젝트를 진행하였습니다.
          </p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}><span>수료</span></div>
            <div css={tagStyle}><span>2024.05 - 2024.12</span></div>
            <div css={tagStyle}><span>프론트엔드</span></div>
          </div>
        </motion.div>

        <motion.div
          css={firstSecondSectionStyle}
          className="second-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}>
          <p>Green Computer Academy</p>
          <h1>
            포토샵/일러스트
            <br />
            자격증반
          </h1>
          <p>GTQ, GTQI 자격증을 위한 교육을 받았습니다.</p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}><span>수료</span></div>
            <div css={tagStyle}><span>2022.10 - 2022.11</span></div>
            <div css={tagStyle}><span>디자이너</span></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education

const glowing = keyframes`
  0%, 100% { box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0); }
  50% { box-shadow: 0 0 20px 1px rgba(255, 149, 0, 0.4); }
`

const wrapperStyle = css`
  display: flex;
  flex-direction: row;
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

  p {
    font-size: ${fontSize.xxxxxs};
    color: ${color.orange};
  }
  h1 {
    font-size: ${fontSize.lg};
    color: ${color.white};
    max-width: 100%;
    overflow-wrap: anywhere;
    text-align: center;
  }

  @media (max-width: 1200px) {
    width: 30%;
    padding: 36px 16px;
    h1 { font-size: clamp(24px, 3vw, 40px); }
  }

  @media (max-width: 768px) {
    width: 100%;
    min-height: 220px;
    padding: 55px 20px 35px;
    h1 { font-size: clamp(28px, 8vw, 42px); }
  }

  @media (max-width: 480px) {
    min-height: 180px;
    padding: 40px 16px 25px;
  }
`

const rightSectionsStyle = css`
  width: 65%;
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding: 40px;
  position: relative;

  @media (max-width: 1450px) {
    gap: 24px;
    padding: 30px 24px;
  }

  @media (max-width: 1200px) {
    width: 70%;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
    padding: 40px 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 20px 20px 60px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    padding: 18px 16px 48px;
    gap: 20px;
  }
`

const firstSecondSectionStyle = css`
  width: 400px;
  max-width: 100%;
  min-width: 0;
  min-height: 500px;
  height: auto;
  box-sizing: border-box;
  flex: 0 1 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  animation: ${glowing} 2s infinite ease-in-out;
  background-color: ${color.white};
  position: relative;
  overflow: hidden;
  padding-bottom: 36px;

  p:nth-of-type(1) {
    font-size: ${fontSize.xxxxs};
    color: ${color.white};
    background-color: ${color.orange};
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    margin-bottom: 20px;
    max-width: calc(100% - 20px);
    box-sizing: border-box;
  }

  p:nth-of-type(2) {
    text-align: left;
    font-size: ${fontSize.xxxxs};
    color: ${color.black};
    padding: 0 40px;
    line-height: 1.8;
    overflow-wrap: anywhere;
  }

  h1 {
    font-size: ${fontSize.xs};
    color: ${color.orange};
    padding: 60px 25px;
    overflow-wrap: anywhere;
  }

  @media (max-width: 1200px) {
    width: min(100%, 500px);
    min-height: 400px;
    flex: none;
    h1 { padding: 35px 20px; }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
    min-height: 340px;
    border-radius: 16px;
    padding-bottom: 28px;

    h1 {
      font-size: clamp(20px, 5.5vw, 28px);
      padding: 30px 18px;
      line-height: 1.4;
    }
    p:nth-of-type(2) {
      padding: 0 24px;
      font-size: 13px;
      line-height: 1.8;
      br { display: none; }
    }
  }

  @media (max-width: 480px) {
    min-height: 320px;
    p:nth-of-type(1) { font-size: 12px; }
    p:nth-of-type(2) { padding: 0 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

const tagWrapperStyle = css`
  display: flex;
  gap: 10px;
  margin-top: 40px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 16px;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 28px;
    gap: 8px;
  }
`

const tagStyle = css`
  padding: 6px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${color.whiteGray};
  border-radius: 50px;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  span {
    font-size: 12px;
    color: ${color.white};
    overflow-wrap: anywhere;
  }
`
