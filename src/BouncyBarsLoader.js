import React from 'react'
import SpriteLike from './SpriteLike'
import spriteSheet from './bouncybars-sprites.png'

const BouncyBarsLoader = () => (
  <SpriteLike
    fps={35}
    frameWidth={297}
    imageHeight={247}
    numOfFrames={35}
    scaleRatio={1}
    sprite={spriteSheet}
  />
)

export default BouncyBarsLoader
