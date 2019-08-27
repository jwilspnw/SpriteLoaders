import React from 'react'
import SpriteLike from './SpriteLike'
import spriteSheet from './glob-sprites.png'

const GlobLoader = () => (
  <SpriteLike
    fps={45}
    imageHeight={256}
    numOfFrames={60}
    scaleRatio={1}
    sprite={spriteSheet}
  />
)

export default GlobLoader
