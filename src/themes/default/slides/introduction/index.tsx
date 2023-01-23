import React from 'react'
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from 'remotion'

const Introduction: React.FC = () => {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const scale1 = spring({
    fps,
    frame,
    config: {
      damping: 200
    }
  })

  const scale2 = spring({
    fps,
    frame: frame - 3.5 * 60,
    config: {
      damping: 200
    }
  })

  const scale = scale1 - scale2

  const scaleName1 = spring({
    fps,
    frame: frame - 2 * 60
  })

  const scaleName2 = spring({
    fps,
    frame: frame - 4 * 60,
    config: {
      damping: 200
    }
  })

  const scaleName = scaleName1 - scaleName2

  return (
    <AbsoluteFill
      style={{
        top: '30%',
        alignItems: 'center'
      }}
    >
      <div
        style={{ transform: `scale(${scale})` }}
        className="introduction-title mb-10"
      >
        <span className="text-2xl">Hello</span>
      </div>

      <div
        style={{
          transform: `scale(${scaleName})`
        }}
        className="text-4xl text-blue-500"
      >
        Suraj
      </div>
    </AbsoluteFill>
  )
}

export default Introduction
