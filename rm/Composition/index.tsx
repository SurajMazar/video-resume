import React from 'react'
import { Composition } from 'remotion'
import Default from '../../src/themes/default'

const CompositionComponent: React.FC = () => {
  return (
    <Composition
      id="Empty"
      component={Default}
      durationInFrames={60}
      fps={60}
      width={1280}
      height={720}
    />
  )
}

export default CompositionComponent
