import { Player as RmPlayer } from '@remotion/player'
import React from 'react'
import Player from '..'

const PlayerWrapper: React.FC = () => {
  return (
    <div className="shadow-md rounded-sm relative bg-white">
      <RmPlayer
        component={Player}
        compositionHeight={400}
        compositionWidth={600}
        durationInFrames={10 * 60}
        fps={60}
        controls
        spaceKeyToPlayOrPause
      />
    </div>
  )
}

export default PlayerWrapper
