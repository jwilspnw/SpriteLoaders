import React from 'react'
import SpriteLike from './SpriteLike'
import spriteSheet from './bullyclap-sprites.png'

const BullyClapLoader = () => (
  <SpriteLike
    fps={35}
    imageHeight={400}
    numOfFrames={35}
    scaleRatio={1}
    sprite={spriteSheet}
  />
)

export default BullyClapLoader
