import React from 'react'
import styled, { keyframes } from 'styled-components'

const SpriteLike = ({
  fps = 60,
  frameWidth,
  imageHeight,
  numOfFrames = 1,
  scaleRatio = 1,
  sprite,
}) => {
  const IMAGE_HEIGHT = imageHeight / scaleRatio
  const FRAME_SIZE = frameWidth || IMAGE_HEIGHT
  const ANIMATION_DURATION = (numOfFrames / fps) * 1000

  const backgroundAnimation = keyframes`
    to {
      transform: translateX(-100%);
    }
  `

  const Wrapper = styled.div`
    width: ${FRAME_SIZE}px;
    height: ${IMAGE_HEIGHT}px;
    background: white;
    overflow: hidden;
    margin: auto;
  `

  // prettier-ignore
  const Img = styled.img`
    height: 100%;
    animation:
      ${backgroundAnimation}
      ${ANIMATION_DURATION}ms
      steps(${numOfFrames})
      both
      infinite;
    will-change: transform;
  `
  return (
    <Wrapper>
      <Img src={sprite} />
    </Wrapper>
  )
}

export default SpriteLike
