import { css, keyframes } from '@emotion/react'
import { color, fontSize } from '@/theme/Theme'

/**
 * src/assets/popups/ 아래 이미지 자동 등록
 * jpg / jpeg / png / webp / gif / avif 지원
 * 배포 후 새 이미지를 넣었다면 다시 빌드/배포해야 합니다.
 */
const imageModules = import.meta.glob(
  '/src/assets/popups/*.{jpg,jpeg,png,webp,gif,avif}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>

const popupImages = Object.entries(imageModules)
  .sort(([a], [b]) => a.localeCompare(b, 'ko', { numeric: true, sensitivity: 'base' }))
  .map(([path, src]) => ({
    id: path,
    src,
    alt: path.split('/').pop()?.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ') ?? '팝업 디자인',
  }))

// 동일한 이미지 묶음을 반복하여 이어붙이는 무한 롤링 슬라이드
const scrollLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

const PopUp = () => {
  // 이미지가 1개뿐이어도 화면이 자연스럽게 차도록 최소 4개까지 복제
  const baseImages = popupImages.length === 0
    ? []
    : Array.from({ length: Math.max(popupImages.length, 4) }, (_, i) => popupImages[i % popupImages.length])
  const slides = [...baseImages, ...baseImages]

  return (
    <section css={wrapperStyle} aria-label="팝업 디자인 포트폴리오">
      <div css={titleStyle}>
        <div />
        <span>POP-UP DESIGN</span>
      </div>

      {popupImages.length === 0 ? (
        <p css={emptyStyle}>src/assets/popups/ 폴더에 이미지를 추가해 주세요.</p>
      ) : (
        <div css={sliderStyle}>
          <div
            className="track"
            style={{ animationDuration: `${Math.max(24, baseImages.length * 5)}s` }}
          >
            {slides.map((slide, index) => (
              <div className="slide" key={`${slide.id}-${index}`} aria-hidden={index >= baseImages.length}>
                <img src={slide.src} alt={index < baseImages.length ? slide.alt : ''} draggable={false} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default PopUp

const wrapperStyle = css`
  width: 100%;
  min-width: 0;
  overflow: hidden;
  color: ${color.black};
  padding-bottom: 85px;
`

// Works.tsx의 WORKS 타이틀과 완전히 동일한 스타일
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

const emptyStyle = css`
  text-align: center;
  padding: 60px 20px;
  color: ${color.gray};
  font-size: 14px;
`

const sliderStyle = css`
  width: min(1500px, 92%);
  margin: 0 auto;
  overflow: hidden;

  .track {
    display: flex;
    width: max-content;
    animation: ${scrollLeft} 40s linear infinite;
    will-change: transform;
  }

  .slide {
    flex: 0 0 auto;
    width: clamp(240px, 29vw, 420px);
    aspect-ratio: 4 / 5;
    padding: 0 11px;
    box-sizing: border-box;
    overflow: hidden;
  }

  .slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;
  }

  &:hover .track { animation-play-state: paused; }

  @media (max-width: 640px) {
    width: calc(100% - 26px);
    .slide { width: min(82vw, 340px); padding: 0 6px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .track { animation: none; }
    overflow-x: auto;
  }
`
