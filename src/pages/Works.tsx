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
import basikaImg1 from '@/assets/works/work13-basika1.jpg'
import basikaImg2 from '@/assets/works/work13-basika2.jpg'
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
import scolpio1 from '@/assets/works/work14-scolpio1.png'
import scolpio2 from '@/assets/works/work14-scolpio2.png'
import scolpio3 from '@/assets/works/work14-scolpio3.jpg'
const Works: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('전체')
  const [showAll, setShowAll] = useState(false)
  const workCategories = [
    '상세페이지', // 0 CHOP CHOP BEAUTE
    '상세페이지', // 1 COUTO
    '상세페이지', // 2 깨온
    '상세페이지', // 3 Nick & Nicole
    '상세페이지', // 4 BASIKA
    '상세페이지', // 5 VASTIC
    '리플렛',     // 6 와이드라인
    '포스터',     // 7 부산 국제 단편 영화제
    '패키지',     // 8 STORE 3355
    '패키지',     // 9 배문성 벌꿀
    '로고',       // 10 SCOLPIO
    '로고',       // 11 VAPEBOOK
    '로고',       // 12 일상팔레트
    '로고',       // 13 Have a dog day
  ] as const
  const visibleWorkIndices = workCategories.reduce<number[]>((indices, category, index) => {
    if (activeFilter === '전체' || activeFilter === category) indices.push(index)
    return indices
  }, [])
  const showMoreButton = visibleWorkIndices.length > 6
  const filters = ['전체', '상세페이지', '리플렛', '포스터', '패키지', '로고'] as const
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
      <nav css={filterStyle} aria-label="작업물 카테고리 필터">
        {filters.map(filter => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => { setActiveFilter(filter); setShowAll(false) }}
          >
            {filter}
          </button>
        ))}
      </nav>
      {(visibleWorkIndices.includes(0) && (showAll || visibleWorkIndices.indexOf(0) < 6)) && (
      <motion.div
        className={`work-section first-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(0) === 5 ? " preview-fade" : ""}`}
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
      )}
      {(visibleWorkIndices.includes(1) && (showAll || visibleWorkIndices.indexOf(1) < 6)) && (
      <motion.div
        className={`work-section second-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(1) === 5 ? " preview-fade" : ""}`}
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
      )}
      {(visibleWorkIndices.includes(2) && (showAll || visibleWorkIndices.indexOf(2) < 6)) && (
      <motion.div
        className={`work-section third-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(2) === 5 ? " preview-fade" : ""}`}
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
      )}
            {(visibleWorkIndices.includes(4) && (showAll || visibleWorkIndices.indexOf(4) < 6)) && (
      <motion.div
        className={`work-section fourth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(4) === 5 ? " preview-fade" : ""}`}
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
          <h1>BASIKA</h1>
          <span>
            브랜드 바시카는 페미닌한 무드를 지향합니다.
            <br />
            상세페이지는 보정된 이미지를 중심으로 구성하며, 소비자가 지루함을 느끼지 않도록
            <br />
            확대컷, 전신컷, 아이템 디테일 컷을 적절히 배치해 시각적인 리듬감을 생각하며 디자인하였습니다.
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
            src={basikaImg1}
            alt=""
            onClick={() => openModal(basikaImg2, 0)}
          />
        </div>
      </motion.div>
      )}
      {(visibleWorkIndices.includes(3) && (showAll || visibleWorkIndices.indexOf(3) < 6)) && (
      <motion.div
        className={`work-section fourth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(3) === 5 ? " preview-fade" : ""}`}
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
          브랜드 닉앤니콜은 캐주얼하고 모던한 무드를 지향합니다.
          <br />
          해외 패션 트렌드를 리서치하여 시즌별 감도에 맞춰 디자인하며,
          의상의 주요 디테일을 상단에 배치해 가독성을 높였습니다.
          <br />
          자연스러운 모델 보정과 부드러운 포징의 이미지를 활용하여
          감각적이고 조화로운 상세페이지를 구성하였습니다.
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
      )}
      {(visibleWorkIndices.includes(5) && (showAll || visibleWorkIndices.indexOf(5) < 6)) && (
      <motion.div
        className={`work-section fifth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(5) === 5 ? " preview-fade" : ""}`}
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
          브랜드 바스틱은 심플하고 미니멀한 무드를 지향합니다.
          <br />
          절제된 디자인과 섬세한 디테일이 돋보이는 의류의 특성을 고려하여,
          제품 본연의 매력이 강조되도록 디자인하였습니다.
          <br />
          화이트와 라이트 그레이 등 차분한 컬러를 중심으로
          깔끔하고 조화로운 홈페이지를 구성하였습니다.
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
      )}
      {(visibleWorkIndices.includes(6) && (showAll || visibleWorkIndices.indexOf(6) < 6)) && (
      <motion.div
        className={`work-section sixth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(6) === 5 ? " preview-fade" : ""}`}
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
      )}
      {(visibleWorkIndices.includes(7) && (showAll || visibleWorkIndices.indexOf(7) < 6)) && (
      <motion.div
        className={`work-section seventh-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(7) === 5 ? " preview-fade" : ""}`}
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
      )}
      {(visibleWorkIndices.includes(8) && (showAll || visibleWorkIndices.indexOf(8) < 6)) && (
      <motion.div
        className={`work-section eightth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(8) === 5 ? " preview-fade" : ""}`}
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
      )}
      {(visibleWorkIndices.includes(9) && (showAll || visibleWorkIndices.indexOf(9) < 6)) && (
      <motion.div
        className={`work-section nineth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(9) === 5 ? " preview-fade" : ""}`}
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
      )}
      {(visibleWorkIndices.includes(10) && (showAll || visibleWorkIndices.indexOf(10) < 6)) && (
      <motion.div
        className={`work-section scolpio-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(10) === 5 ? " preview-fade" : ""}`}
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
          <h1>SCOLPIO</h1>
          <span>
            브랜드 스콜피오 로고 디자인입니다.
            <br />
            SCOLPIO의 이니셜 ‘S’와 전갈의 날카롭고 역동적인 형상을 결합한 심볼 로고입니다. 
            <br />
            유려한 곡선과 강렬한 직선의 조화를 통해 전갈이 지닌 민첩함과 강인함을 표현했으며, 
            <br />
            메탈릭한 질감으로 브랜드의 세련되고 프리미엄한 이미지를 강조했습니다.
          </span>
          <div className="text2">
            <p>기여도</p>
            <h2>본인 100%</h2>
            <p>사용 프로그램</p>
            <h2>Illustrator</h2>
          </div>
        </div>
        <div className="image">
          <img
            src={scolpio1}
            alt=""
            onClick={() => openModal([scolpio1, scolpio2, scolpio3], 0)}
          />
        </div>
      </motion.div>
      )}
{(visibleWorkIndices.includes(11) && (showAll || visibleWorkIndices.indexOf(11) < 6)) && (
      <motion.div
        className={`work-section tenth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(11) === 5 ? " preview-fade" : ""}`}
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
          <h1>VAPEBOOK</h1>
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
      )}
{(visibleWorkIndices.includes(12) && (showAll || visibleWorkIndices.indexOf(12) < 6)) && (
      <motion.div
        className={`work-section eleventh-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(12) === 5 ? " preview-fade" : ""}`}
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
      )}
{(visibleWorkIndices.includes(13) && (showAll || visibleWorkIndices.indexOf(13) < 6)) && (
      <motion.div
        className={`work-section twelveth-section${showMoreButton && !showAll && visibleWorkIndices.indexOf(13) === 5 ? " preview-fade" : ""}`}
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
      )}
{showMoreButton && (
        <button
          type="button"
          css={moreButtonStyle}
          onClick={() => setShowAll(prev => !prev)}
          aria-expanded={showAll}
        >
          {showAll ? 'CLOSE' : 'MORE'}
        </button>
      )}
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0;
  & > [class*="-section"] {
    display: flex;
    align-items: center;
    width: 88%;
    max-width: 1500px;
    gap: 24px;
    padding: 40px 0;
    border-top: 1px solid ${color.black};
    background-color: rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    .type-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      flex: 0 0 200px;
      text-align: center;
      color: ${color.orange};
      p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        font-size: ${fontSize.xxxxs};
      }
    }
    .text {
      display: flex;
      flex: 1 1 0;
      min-width: 0;
      flex-direction: column;
      gap: 20px;
      h1 {
        margin: 0;
        color: ${color.black};
        font-size: ${fontSize.xl};
        overflow-wrap: anywhere;
      }
      > span {
        color: ${color.gray};
        font-size: ${fontSize.xxxxs};
        line-height: 1.8;
        overflow-wrap: anywhere;
      }
      .text2 {
        display: grid;
        grid-template-columns: max-content minmax(0, 1fr);
        align-items: start;
        gap: 10px 12px;
        p,
        h2 {
          margin: 0;
          font-size: ${fontSize.xxxxs};
          line-height: 1.6;
        }
        p { color: ${color.gray}; }
        h2 { color: ${color.black}; overflow-wrap: anywhere; }
      }
    }
    .image {
      width: 350px;
      height: 300px;
      flex: 0 0 350px;
      overflow: hidden;
      cursor: pointer;
      filter: brightness(70%);
      transition: filter 0.5s ease-in-out, transform 0.5s ease-in-out;
      margin-left: auto;
      margin-right: 40px;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        filter: brightness(100%);
        transform: scale(1.05);
      }
    }
  }
  /\\* 접힌 상태에서 마지막 작품의 카테고리, 텍스트, 이미지 전체를 같은 그라데이션으로 처리 \\*/
  & > .preview-fade {
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%);
    mask-image: linear-gradient(to bottom, #000 0%, #000 45%, transparent 100%);
  }
  @media (max-width: 1024px) {
    & > [class*="-section"] {
      width: 92%;
      gap: 20px;
      padding: 35px 0;
      .type-title { width: 110px; flex-basis: 110px; }
      .text h1 { font-size: 24px; }
      .image {
        width: 280px;
        height: 240px;
        flex-basis: 280px;
        margin-right: 0;
      }
    }
  }
  @media (max-width: 768px) {
    & > [class*="-section"] {
      width: calc(100% - 32px);
      max-width: 100%;
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 20px;
      padding: 35px 0;
      .type-title {
        order: 1;
        width: 100%;
        flex: none;
        justify-content: flex-start;
        text-align: left;
        p {
          flex-direction: row;
          justify-content: flex-start;
          gap: 5px;
          font-size: 13px;
          br { display: none; }
        }
      }
      .text {
        order: 2;
        width: 100%;
        flex: none;
        gap: 14px;
        h1 { font-size: 24px; line-height: 1.3; }
        > span {
          font-size: 13px;
          line-height: 1.8;
          br { display: none; }
        }
        .text2 {
          gap: 10px 16px;
          p, h2 { font-size: 12px; }
        }
      }
      .image {
        /\\* 모바일에서만 좌우 여백 없이 화면 너비 전체 사용 \\*/
        display: block;
        order: 3;
        align-self: flex-start;
        width: 100vw;
        max-width: none;
        height: auto;
        aspect-ratio: auto;
        flex: none;
        margin: 0;
        margin-left: calc((100% - 100vw) / 2);
        overflow: hidden;
        filter: brightness(100%);
        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: contain;
        }
        &:hover { transform: none; }
      }
    }
  }
  @media (max-width: 480px) {
    & > [class*="-section"] {
      padding: 28px 0;
      .text {
        h1 { font-size: 21px; }
        > span { font-size: 12px; }
      }
    }
  }
  @media (prefers-reduced-motion: reduce) {
    & > [class*="-section"] .image { transition: none; }
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
  @media (max-width: 768px) {
    height: 280px;
    gap: 25px;
    div { height: 120px; }
    span { font-size: 20px; margin-bottom: 30px; }
  }
  @media (max-width: 480px) {
    height: 220px;
    div { height: 90px; }
    span { font-size: 18px; margin-bottom: 20px; }
  }
`
const filterStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 88%;
  max-width: 1500px;
  margin: 0 auto 36px;
  button {
    appearance: none;
    cursor: pointer;
    border: 1px solid ${color.black};
    border-radius: 999px;
    background: transparent;
    color: ${color.black};
    padding: 10px 19px;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s, color 0.2s;
    &:hover, &.active {
      background: ${color.black};
      color: #fff;
    }
    &:focus-visible {
      outline: 2px solid ${color.orange};
      outline-offset: 3px;
    }
  }
  @media (max-width: 768px) {
    width: 90%;
    justify-content: flex-start;
    gap: 8px;
    margin-bottom: 24px;
    button {
      font-size: 12px;
      padding: 9px 14px;
    }
  }
`
const moreButtonStyle = css`
  display: block;
  width: fit-content;
  margin: 22px auto 70px;
  padding: 12px 20px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: ${color.lightGray};
  font-size: 13px;
  font-weight: 100;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: opacity 0.2s ease;
  &:hover { opacity: 0.55; }
  &:focus-visible {
    outline: 2px solid ${color.orange};
    outline-offset: 3px;
  }
  @media (max-width: 768px) {
    margin: 20px auto 50px;
    font-size: 14px;
  }
`
