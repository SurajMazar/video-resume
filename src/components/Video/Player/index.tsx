import useComputed from '@/hooks/useComputed'
import Default from '@/themes/default'
import { Slider } from 'antd'
import React from 'react'
import { useCurrentFrame } from 'remotion'

const Player: React.FC = () => {
  const frame = useCurrentFrame()

  const showFrame = useComputed(() => {
    return Math.floor((frame / (5 * 60)) * 100)
  }, [frame])

  return (
    <div className="shadow-md rounded-sm h-full w-full">
      <Default />
    </div>
  )
}

export default Player
