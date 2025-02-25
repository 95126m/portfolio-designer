import { useState } from 'react'
import { css } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'
import { motion } from 'framer-motion'
import Modal from '@/components/Modal'

import chopImg1 from '@/assets/works/work1-chop1.jpg'
import chopImg2 from '@/assets/works/work1-chop2.jpg'

import coutoImg1 from '@/assets/works/work2-couto1.jpg'
import coutoImg2 from '@/assets/works/work2-couto2.jpg'

import keonImg1 from '@/assets/works/work3-keon1.jpg'
import keonImg2 from '@/assets/works/work3-keon2.jpg'

import nnImg1 from '@/assets/works/work4-nn1.jpg'
import nnImg2 from '@/assets/works/work4-nn2.jpg'

import vasticImg1 from '@/assets/works/work5-vastic1.jpg'
import vasticImg2 from '@/assets/works/work5-vastic2.jpg'

import widelineImg1 from '@/assets/works/work6-wideline1.jpg'
import widelineImg2 from '@/assets/works/work6-wideline2.jpg'

import busanImg1 from '@/assets/works/work7-busan1.jpg'
import hongsamImg1 from '@/assets/works/work8-hongsam1.jpg'

import beeImg1 from '@/assets/works/work9-bee1.jpg'
import beeImg2 from '@/assets/works/work9-bee2.jpg'

import bapeImg1 from '@/assets/works/work10-bape1.jpg'
import palettImg1 from '@/assets/works/work11-palett1.jpg'
import dogImg1 from '@/assets/works/work12-dog1.jpg'

const Works: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalImage, setModalImage] = useState<string[] | null>(null) 

  const openModal = (image: string | string[], index: number) => {
    setModalImage(Array.isArray(image) ? image : [image]) 
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage(null)
  }

  const prevImage = () => {
    if (!modalImage) return
    setCurrentIndex(prev => (prev === 0 ? modalImage.length - 1 : prev - 1))
  }

  const nextImage = () => {
    if (!modalImage) return
    setCurrentIndex(prev => (prev === modalImage.length - 1 ? 0 : prev + 1))
  }

  return (
    <div css={wrapperStyle}>
      <div css={titleStyle}>
        <div></div>
        <span>WORKS</span>
      </div>

      <motion.div
        className="first-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            상세페이지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>CHOP CHOP BEAUTE</h1>
          <span>
            그래핀 필링 패드 상세페이지 디자인입니다.
            <br />
            촉촉한 '스킨케어'라는 점을 생각하여 물 질감 이미지로 백그라운드
            지정하였습니다.
            <br />
            깨끗한 무드와 제품의 장점을 돋보이도록 디자인 진행하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={chopImg1}
            alt=""
            onClick={() => openModal(chopImg2, 0)}
          />
        </div>
      </motion.div>

      <motion.div
        className="second-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            상세페이지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>COUTO</h1>
          <span>
            포르투갈 치약 상세페이지 디자인 입니다.
            <br />
            브랜드 상품의 컬러와 유사한 컬러를 메인으로 잡고 디자인
            진행하였습니다.
            <br />
            판매량을 보여줌으로써 상품의 인지도와 상품이 안전하다는 것을
            보여주었습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={coutoImg1}
            alt=""
            onClick={() => openModal(coutoImg2, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="third-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            상세페이지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>깨온</h1>
          <span>
            숙취해소제 상세페이지 디자인 입니다.
            <br />
            젊은층을 타켓으로 브랜드 고유 캐릭터와 조화롭도록 디자인하였습니다.
            <br />
            '숙취해소제'의 시원함을 돋보이도록 블루컬러를 사용하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={keonImg1}
            alt=""
            onClick={() => openModal(keonImg2, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="fourth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            상세페이지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>Nick & Nicole</h1>
          <span>
            모던 페미닌 여성 의류 상세페이지, 베너, 팝업 이미지 디자인
            디자인입니다.
            <br />
            시즌마다 트렌디하도록 디자인하되 닉앤니콜의 메인 무드를 헤치지않도록
            디자인 진행하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={nnImg1}
            alt=""
            onClick={() => openModal(nnImg2, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="fifth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            상세페이지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>VASTIC</h1>
          <span>
            유니섹스 의류 브랜드 상세페이지, 베너, 팝업 이미지 디자인 입니다.
            <br />
            브랜드 ‘vastic’ 의 홈페이지 스타일은 심플하고 깔끔한 느낌으로 주로
            디자인을 진행하였습니다.
            <br />
            패턴이 많이 들어가지 않는 디테일이 주를 이루는 의류들만 이루어져
            있기 때문에 최대한
            <br />
            패션 스타일과 어우러질 수 있고 의상이 돋보이도록 사이트 메인 컬러와
            서브 컬러는
            <br />
            화이트, 라이트 그레이 같이 차분한 컬러로 디자인을 하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={vasticImg1}
            alt=""
            onClick={() => openModal(vasticImg2, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="sixth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            리플렛
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>와이드라인</h1>
          <span>
            의약 제품 판매 브랜드 교육용 리플렛 디자인입니다.
            <br />
            브랜드 측에서 선호하시는 단일 컬러를 사용하여 심플하고 교육용으로
            읽기 편하도록 디자인 하였습니다.
            <br />
            가독성이 떨어지지 않도록 심플한 라인 아이콘을 일러스트로 제작하여
            삽입하였습니다.
            <br />
            심플 · 모던 스타일의 컨셉트를 잡고 시작하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={widelineImg1}
            alt=""
            onClick={() => openModal(widelineImg2, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="seventh-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            포스터
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>부산 국제 단편 영화제</h1>
          <span>
            부산에서 열리는 영화제 포스터 디자인입니다.
            <br />
            부산의 높은 빌딩들, 높은 하늘을 조화롭게 표현하였습니다.
            <br />
            노르스름한 저녁 즈음에 개최되는 이벤트 이기 때문에 오렌지 컬러로
            저녁노을을 표현하였으며,
            <br />
            늦은 저녁과 고요한 밤의 사이를 하늘에 수놓은 별들로 나타내었습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={busanImg1}
            alt=""
            onClick={() => openModal(busanImg1, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="eightth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            패키지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>STORE 3355</h1>
          <span>
            홍삼 패키지 디자인입니다.
            <br />
            브랜드측에서 선호하는 빈티지 무드의 패키지로 제작하였습니다.
            <br />
            기존 캐릭터 성을 해치지 않으면서 촌스럽지 않은 빈티지 패턴을
            삽입하였습니다.
            <br />
            '너랑 나, 우리 함께'의 폰트는 직접 제작하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={hongsamImg1}
            alt=""
            onClick={() => openModal(hongsamImg1, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="nineth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            패키지
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>배문성 벌꿀</h1>
          <span>
            벌꿀 패키지 디자인입니다.
            <br />
            블랙컬러의 백그라운드에 벌집 모양 패턴을 삽입하여 밋밋하지 않은 블랙
            박스를 디자인 하였습니다.
            <br />
            블랙컬러와 어우러지는 꿀의 골드 컬러를 메인 로고 컬러로 선택하여
            럭셔리한 무드를 완성 시켰습니다.
            <br />
            유리병에 든 골드 컬러의 반짝거리는 꿀이 연상되는 로고를 디자인
            하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={beeImg1}
            alt=""
            onClick={() => openModal([beeImg1, beeImg2], 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="tenth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            로고
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>BAPEBOOK</h1>
          <span>
            전자담배 도매 업체 로고 디자인입니다.
            <br />
            '인스타그램'의 인기가 치속기 전 만인의 SNS 페이스북을 모티브로 한
            전자담배 스마트스토어 베이프북.
            <br />
            페이스북하면 사람들 머릿속에 가장 많이 떠오르는 '좋아요' 버튼.
            <br />
            '좋아요'의 따봉 아이콘과 전자담배를 손에 쥔 형상을 합쳐
            디자인하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={bapeImg1}
            alt=""
            onClick={() => openModal(bapeImg1, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="eleventh-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            로고
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>일상팔레트</h1>
          <span>
            바디 용품 브랜드 로고 디자인입니다.
            <br />
            ‘일상팔레트’ 라는 브랜드 명의 컨셉트에 충실하게 표현했습니다.
            <br />
            그림 팔레트에 손 그림을 그린 듯한 ‘물방울’ 이미지화 그리고 손 글씨로
            <br />
            어린아이가 낙서를 한 듯 사랑스럽고 키치한 무드의 폰트를
            사용하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={palettImg1}
            alt=""
            onClick={() => openModal(palettImg1, 0)}
          />
        </div>
      </motion.div>
      <motion.div
        className="twelveth-section"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
        <div className="type-title">
          <p>
            로고
            <br />
            디자인
          </p>
        </div>
        <div className="text">
          <h1>Have a dog day</h1>
          <span>
            반려견 용품 브랜드 로고 디자인입니다.
            <br />
            사랑스러운 반려 견을 일러스트레이터 프로그램을 통해 이미지화
            시켰습니다.
            <br />
            개인적으로 좋아하는 화이트 컬러 ‘비숑 프리제‘ 를 선택하였습니다.
            <br />
            이미지 로고와 더불어 폰트 또한 동글 동글 한 영어 폰트를
            사용하였습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Photoshop / Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={dogImg1}
            alt=""
            onClick={() => openModal(dogImg1, 0)}
          />
        </div>
      </motion.div>

      {isModalOpen && modalImage && (
        <Modal
          images={modalImage} 
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage} 
        />
      )}
    </div>
  )
}

export default Works

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;

  .first-section,
  .second-section,
  .third-section,
  .fourth-section,
  .fifth-section,
  .sixth-section,
  .seventh-section,
  .eightth-section,
  .nineth-section,
  .tenth-section,
  .eleventh-section,
  .twelveth-section {
    display: flex;
    align-items: center;
    width: 88%;
    border-top: 1px solid ${color.black};
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: rgba(255, 255, 255, 0.2);

    .type-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 100%;
      text-align: center;
      color: ${color.orange};

      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: ${fontSize.xxxxs};
      }
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h1 {
        color: ${color.black};
        font-size: ${fontSize.xl};
      }

      span {
        color: ${color.gray};
        font-size: ${fontSize.xxxxs};
      }

      .text2 {
        display: flex;
        align-items: flex-start;
        gap: 10px;

        p {
          color: ${color.gray};
          font-size: ${fontSize.xxxxs};
          margin-top: 10px;
        }
        h2 {
          color: ${color.black};
          font-size: ${fontSize.xxxxs};
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }

    .image {
      width: 350px;
      height: 300px;
      overflow: hidden;
      background-size: cover;
      background-position: center;
      cursor: pointer;
      filter: brightness(70%);
      will-change: transform, filter;
      transition: all 0.5s ease-in-out;
      margin-left: auto;
      margin-right: 40px;

      &:hover {
        filter: brightness(100%);
        transform: scale(1.05);
      }
    }
  }
`

const titleStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 450px;
  gap: 40px;

  div {
    width: 1px;
    height: 200px;
    background-color: ${color.black};
  }

  span {
    font-size: ${fontSize.sm};
    color: ${color.black};
    margin-bottom: 60px;
  }
`
