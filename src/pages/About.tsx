import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div css={wrapperStyle}>
      <motion.div
        className="left-section"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}>
        <p>OVERVIEW</p>
        <h1>ABOUT</h1>
      </motion.div>

      <div className="right-sections">
        <motion.div
          className="who-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}>
          <h1>WHO</h1>
          <p>
            조화롭게 스며드는 디자이너, 김영은입니다.
            <br />
            다양한 환경에서 적응하며 배려와 유연한 소통 능력을 길러왔습니다.
            <br />
            잦은 변화 속에서도 타협점을 찾고, 배울 점이 있으면 스스로 변화하며
            성장하는 태도를 지녀왔습니다.
            <br />
            새로운 환경에서도 자연스럽게 스며드는 디자이너로 계속 발전해
            나가겠습니다.
          </p>
        </motion.div>
        <motion.div
          className="vision-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}>
          <h1>VISION</h1>
          <p>
            새로운 트렌드와 기술에 대한 높은 탐구심을 바탕으로, 직관적이고
            감각적인 디자인을 추구하는 웹디자이너입니다.
            <br />
            디자인 툴을 능숙하게 활용하며, 브랜드의 아이덴티티와 사용자의 경험을
            고려한 효과적인 비주얼 커뮤니케이션을 지향합니다.
            <br />
            현재 프론트엔드 교육을 받아 디자인 구현력을 확장하고 있으며, 단순한
            미적 요소를 넘어 전환율을 극대화하는 상세페이지 제작을 목표로 하고
            있습니다.
            <br />
            앞으로는 UI/UX와 퍼블리싱까지 아우르는 올 라운더 웹디자이너로
            성장해, 더욱 가치 있는 디자인을 선보이고 싶습니다.
          </p>
        </motion.div>
        <motion.div
          className="perseverance-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeInOut' }}>
          <h1>PERSEVERANCE</h1>
          <p>
            부족함을 느끼면 좌절하지 않고 극복하기 위해 노력합니다.
            <br />
            해외에서 학창 시절을 보내며 미술 실력이 부족하다고 느꼈고, 이를
            보완하기 위해 매 방학마다 디자인 학원을 다니며 실력을 키웠습니다.
            <br />그 결과, 3학년부터는 패션쇼에서도 인정받으며 성장할 수
            있었습니다.
            <br />
            업무에서도 같은 자세로 임하며, 배움을 통해 역량을 키우고, 타인에게
            긍정적인 영향을 주는 사람이 되겠습니다.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About

const wrapperStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  width: 100%;
  min-height: 100vh;

  .left-section {
    width: 25%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${color.opacity80};
    padding: 50px;
    p {
      font-size: ${fontSize.xxxxxs};
      color: ${color.orange};
    }
    h1 {
      font-size: ${fontSize.xl};
      color: ${color.white};
    }
  }

  .right-sections {
    width: 75%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .who-section,
  .vision-section,
  .perseverance-section {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 40px 80px;
  }

  .who-section {
    border-bottom: 1px solid ${color.whiteGray};
    h1 {
      font-size: ${fontSize.md};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
    }
  }

  .vision-section {
    border-bottom: 1px solid ${color.whiteGray};
    h1 {
      font-size: ${fontSize.md};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
    }
  }
  .perseverance-section {
    h1 {
      font-size: ${fontSize.md};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
    }
  }
`
