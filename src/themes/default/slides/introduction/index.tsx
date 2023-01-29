import { VideoPlayerContext } from '@/context/VideoPlayerContext'
import { springViaDuration } from '@/utils/remotion.util'
import React, { useContext } from 'react'
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion'

const Introduction: React.FC = () => {

  /**
   * REMOTION HOOKS
   */
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  /**
   * VIDEO CONTEXT
   */
  const {resumeForm} = useContext(VideoPlayerContext)

  /**
   * COMPONENT STATE
   */
  const scaleSmallbg =  springViaDuration(fps,frame,1,5)
  const scaleTitlebg =  springViaDuration(fps,frame,2,5)
  const scaleNamebg =  springViaDuration(fps,frame,2.5,5)
  const imageScale = springViaDuration(fps,frame,1.5,5)

  return (
    <>
      <AbsoluteFill
        style={{
          top: '0%'
        }}
      >
        <div className='absolute top-0 w-[30%] bg-primary left-0 h-full rounded-r-[50%]' 
          style={{
            transform:`scale(${scaleSmallbg})`,
            transformOrigin:'left'
          }}
        ></div>
        <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] w-full">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-[175px] h-[175px] rounded-full overflow-hidden border-4 border-white drop-shadow-md"
              style={{
                transform:`scale(${imageScale})`
              }}
            >
              <img
                src={resumeForm?.profile_picture}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className='text-4xl mb-2' style={{
                transform:`scale(${scaleTitlebg})`,
                transformOrigin:'left'
              }}>Hello I&apos;m</h3>
              <p className="text-primary text-2xl font-medium"
                 style={{
                  transform:`scale(${scaleNamebg})`,
                  transformOrigin:'left'
                }}
              >{resumeForm?.name}</p>
            </div>
          </div>
        </div>

        <div className='h-[200px] w-[200px] bg-primary p-1 absolute top-[-20%] right-[-15%] rounded-full'
          style={{
            transform:`scale(${scaleSmallbg})`,
          }}
        >
          <div className='rounded-full border-2 border-white'></div>
        </div>

        <div className='h-[100px] w-[100px] bg-primary p-1 absolute bottom-[-8%] right-[-8%] rounded-full'
           style={{
            transform:`scale(${scaleSmallbg})`,
          }}
        >
          <div className='rounded-full border-2 border-white'></div>
        </div>
      </AbsoluteFill>
    </>
  )
}

export default Introduction
