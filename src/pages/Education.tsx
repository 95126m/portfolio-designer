import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { color, fontSize } from '@/theme/Theme'

const Education = () => {
  return (
    <div css={wrapperStyle}>
      <motion.div
        css={leftSectionStyle}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}>
        <p>OVERVIEW</p>
        <h1>EDUCATION</h1>
      </motion.div>

      <div css={rightSectionsStyle}>
        <motion.div
          css={firstSecondSectionStyle}
          className="first-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}>
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
            <div css={tagStyle}>
              <span>수료</span>
            </div>
            <div css={tagStyle}>
              <span>2024.05 - 2024.12</span>
            </div>
            <div css={tagStyle}>
              <span>프론트엔드</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          css={firstSecondSectionStyle}
          className="second-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeInOut' }}>
          <p>Green Computer Academy</p>
          <h1>
            포토샵/일러스트
            <br />
            자격증반
          </h1>
          <p>GTQ, GTQI 자격증을 위한 교육을 받았습니다.</p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}>
              <span>수료</span>
            </div>
            <div css={tagStyle}>
              <span>2022.10 - 2022.11</span>
            </div>
            <div css={tagStyle}>
              <span>디자이너</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education

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

  p:nth-of-type(1) {
    font-size: ${fontSize.xxxxs};
    color: ${color.white};
    background-color: ${color.orange};
    padding: 10px 20px;
    border-radius: 0 0 10px 10px;
    margin-bottom: 20px;
  }

  p:nth-of-type(2) {
    text-align: left;
    font-size: ${fontSize.xxxxs};
    color: ${color.black};
    padding: 0 40px;
  }

  h1 {
    font-size: ${fontSize.xs};
    color: ${color.orange};
    padding: 60px 40px;
  }
`

const tagWrapperStyle = css`
  display: flex;
  gap: 10px;
  margin-top: 40px;
`

const tagStyle = css`
  padding: 4px 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${color.whiteGray};
  border-radius: 50px;
  min-width: 100px;
  span {
    font-size: 12px;
    color: ${color.white};
  }
`
