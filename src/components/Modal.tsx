import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import { color } from '@/theme/Theme'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

interface ModalProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Modal: React.FC<ModalProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  if (!images || images.length === 0) return null

  const currentImage = images[currentIndex] || ''

  const isVideo = currentImage.endsWith('.mp4')
  const isSingleImage = images.length === 1

  return (
    <div
      css={modalOverlayStyle}
      onClick={onClose}>
      <motion.div
        css={modalContentStyle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}>
        {isVideo ? (
          <video
            css={modalMediaStyle}
            controls
            autoPlay>
            <source
              src={currentImage}
              type="video/mp4"
            />
            브라우저가 비디오 태그를 지원하지 않습니다.
          </video>
        ) : (
          <img
            src={currentImage}
            alt={`modal-img-${currentIndex}`}
            css={modalMediaStyle}
          />
        )}

        {!isSingleImage && (
          <>
            <button
              css={prevButtonStyle}
              onClick={onPrev}>
              <ArrowBackIosIcon fontSize="large" />
            </button>
            <button
              css={nextButtonStyle}
              onClick={onNext}>
              <ArrowForwardIosIcon fontSize="large" />
            </button>
          </>
        )}
      </motion.div>
    </div>
  )
}

export default Modal

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const modalContentStyle = css`
  background-color: ${color.black};
  position: relative;
  max-width: 80vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${color.orange};
    transition: background-color 0.3s;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    background-color: ${color.gray};
  }
`

const modalMediaStyle = css`
  width: auto;
  height: auto;
`

const prevButtonStyle = css`
  position: fixed;
  left: 11vw;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: transparent;
  border: none;
  color: ${color.orange};
  cursor: pointer;
  outline: none;
  box-shadow: none;
  user-select: none;

  &:focus,
  &:active {
    outline: none;
    border: none;
    background: transparent;
    box-shadow: none;
  }
`

const nextButtonStyle = css`
  position: fixed;
  right: 11vw;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: transparent;
  border: none;
  color: ${color.orange};
  cursor: pointer;
  outline: none;
  box-shadow: none;
  user-select: none;

  &:focus,
  &:active {
    outline: none;
    border: none;
    background: transparent;
    box-shadow: none;
  }
`
