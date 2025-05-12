import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'

const Carrer = () => {
  return (
    <div css={wrapperStyle}>
      <motion.div
        className="left-section"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeInOut' }}>
        <p>OVERVIEW</p>
        <h1>CARRER</h1>
      </motion.div>

      <div className="right-sections">
        <motion.div
          className="first-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}>
          <h1>㈜ 일신산업</h1>
          <p>
            2030 여성 타깃의 패션 브랜드에서 매니시 & 페미닌 스타일 중심의
            이미지 제작을 담당하였습니다.
            <br />
            웹디자인 전반은 물론, SNS 광고 콘텐츠 제작과 플랫폼 기획전 운영까지
            맡아 진행하였습니다.
            <br />
            또한 경리 업무도 병행하며 지출결의서 작성, 증빙 정리, 전표 입력 등의
            실무를 수행했고, ERP 시스템을 활용해 비용 정산 및 회계 처리를
            체계적으로 관리하였습니다.
          </p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}>
              <span>개인 사정으로 인한 퇴사</span>
            </div>
            <div css={tagStyle}>
              <span>2025.01 - 2025.05</span>
            </div>
            <div css={tagStyle}>
              <span>웹디자이너</span>
            </div>
            <div css={tagStyle}>
              <a
                href="https://muarvo.com/"
                target="_blank"
                rel="noopener noreferrer"
                css={linkTagStyle}>
                <span>사이트 보기</span>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="who-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}>
          <h1>㈜ 팀씨</h1>
          <p>
            2030 타깃 여성복 브랜드에서 모던 패미닌 스타일의 이미지 제작을
            담당했습니다.
            <br />
            팝업 디자인, 배너 디자인, 상세페이지 등 전반적인 디자인 업무를
            수행하며, 시즌에 맞는 스타일로 유연하게 변화를 주었습니다.
            <br />매 시즌 1,000장 이상의 사진 보정 및 영상 편집을 진행했으며,
            브랜드 SNS 업로드용 콘텐츠 제작을 통해 고객과의 소통을 강화했습니다.
            <br />
            또한, 비시즌에는 온라인 의류 트렌드 조사를 수행하며, 브랜드 방향성
            설정에 기여했습니다.
          </p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}>
              <span>개인 사정으로 인한 퇴사</span>
            </div>
            <div css={tagStyle}>
              <span>2023.05 - 2023.09</span>
            </div>
            <div css={tagStyle}>
              <span>웹디자이너</span>
            </div>
            <div css={tagStyle}>
              <a
                href="https://nicknnicole.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                css={linkTagStyle}>
                <span>사이트 보기</span>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="vision-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeInOut' }}>
          <h1>포그라운드</h1>
          <p>
            전자담배 온라인 판매 회사에서 팝업, 배너, 상세페이지 등 전반적인
            디자인 업무를 담당하며, 제품 특성에 맞춘 시각적 요소를
            기획·제작했습니다.
            <br />
            또한, MD로서 고객 응대 및 이벤트 기획을 병행하며, 효과적인 마케팅을
            지원했습니다.
            <br />
            특히, 스마트스토어 UI 디자인을 담당하였으며, 약 10개 이상의 신규
            스마트스토어 사이트를 개설하고, 가독성 높은 디자인과 친절한 응대로
            매출을 2배 이상 성장시킨 경험이 있습니다.
          </p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}>
              <span>온라인 전자담배 판매 금지로 법이 변경되어 퇴사</span>
            </div>
            <div css={tagStyle}>
              <span>2022.09 - 2023.04</span>
            </div>
            <div css={tagStyle}>
              <span>웹디자이너</span>
            </div>
            <div css={tagStyle}>
              <a
                href="https://xn--ok0bj46byij.com/"
                target="_blank"
                rel="noopener noreferrer"
                css={linkTagStyle}>
                <span>사이트 보기</span>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="perseverance-section"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.8, ease: 'easeInOut' }}>
          <h1>주식회사 바스틱</h1>
          <p>
            2030 타깃 남성복 브랜드에서 모던 스트릿 스타일의 의류 디자인과
            홈페이지 관리를 담당하며, 시즌별 트렌드를 반영한 디자인 기획을
            수행했습니다.
            <br />
            홈페이지에 사용되는 모든 이미지 디자인을 단독 제작하며, 브랜드
            아이덴티티를 효과적으로 표현했습니다.
            <br />매 시즌 동대문을 방문해 트렌드 조사 및 기획을 진행하고, 브랜드
            SNS 콘텐츠 제작을 통해 고객과의 소통을 강화했습니다.
            <br />
            또한, 인플루언서 협업을 직접 진행하며 브랜드 인지도를 높이는 데
            기여했습니다.
            <br />
            의류 작업지시서를 제작하고, 거래처와의 원활한 소통을 통해 디자인
            품질을 향상시켰으며, 패션과 웹디자인을 아우르는 다양한 역할을
            수행했습니다.
          </p>
          <div css={tagWrapperStyle}>
            <div css={tagStyle}>
              <span>경영악화로 인한 퇴사</span>
            </div>
            <div css={tagStyle}>
              <span>2020.02 - 2022.08</span>
            </div>
            <div css={tagStyle}>
              <span>그래픽 디자이너</span>
            </div>
            <div css={tagStyle}>
              <a
                href="https://vastic.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
                css={linkTagStyle}>
                <span>사이트 보기</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Carrer

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
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .first-section,
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

  .first-section {
    border-bottom: 1px solid ${color.whiteGray};
    h1 {
      font-size: ${fontSize.sm};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .who-section {
    border-bottom: 1px solid ${color.whiteGray};
    h1 {
      font-size: ${fontSize.sm};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .vision-section {
    border-bottom: 1px solid ${color.whiteGray};
    h1 {
      font-size: ${fontSize.sm};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  .perseverance-section {
    h1 {
      font-size: ${fontSize.sm};
      color: ${color.black};
    }

    p {
      font-size: ${fontSize.xxxxs};
      color: ${color.black};
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`
const tagWrapperStyle = css`
  display: flex;
  gap: 10px;
`

const tagStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${color.whiteGray};
  padding: 6px 10px;
  border-radius: 4px;
  min-width: 100px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${color.lightGray}; /* ✅ hover 시 변경 */
  }

  span {
    font-size: 12px;
    color: ${color.white};
  }
`

/* ✅ a 태그도 동일한 스타일 적용 */
const linkTagStyle = css`
  width: 100%; /* ✅ 부모 div 크기와 동일하게 설정 */
  height: 100%; /* ✅ 부모 div 크기와 동일하게 설정 */
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
