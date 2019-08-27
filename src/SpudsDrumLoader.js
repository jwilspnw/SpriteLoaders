import React from 'react'
import SpriteLike from './SpriteLike'
import spriteSheet from './spudsdrum-sprites.png'

const SpudsDrumLoader = () => (
  <SpriteLike
    fps={20}
    frameWidth={426}
    imageHeight={320}
    numOfFrames={38}
    scaleRatio={1}
    sprite={spriteSheet}
  />
)

export default SpudsDrumLoader
