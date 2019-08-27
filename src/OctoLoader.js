import React from 'react'
import SpriteLike from './SpriteLike'
import spriteSheet from './octoloader-sprites.png'

const OctoLoader = () => (
  <SpriteLike
    fps={60}
    imageHeight={525}
    numOfFrames={200}
    scaleRatio={2}
    sprite={spriteSheet}
  />
)

export default OctoLoader
