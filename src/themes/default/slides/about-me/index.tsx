import { VideoPlayerContext } from '@/context/VideoPlayerContext'
import { springViaDuration } from '@/utils/remotion.util'
import React, { useContext } from 'react'
import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion'

const AboutMe: React.FC = () => {
  /**
   * REMOTION HOOK
   */
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  /**
   * VIDEO CONTEXT
   */
  const { resumeForm } = useContext(VideoPlayerContext)

  /**
   * COMPONENT STATE
   */
  const aboutMeImage = springViaDuration(fps, frame, 5.2, 10)
  const aboutMeTitle = springViaDuration(fps, frame, 6, 10)
  const aboutMeDetails = springViaDuration(fps, frame, 6.5, 10)

  return (
    <>
      <AbsoluteFill
        style={{
          top: '0%'
        }}
      >
        <div className="flex items-center h-full">
          <div
            className="w-1/2 h-full"
            style={{
              transform: `scale(${aboutMeImage})`,
              transformOrigin: 'left'
            }}
          >
            <img
              src={resumeForm?.profile_picture}
              alt=""
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="w-1/2 p-6">
            <h3
              className="text-primary text-2xl mb-3 uppercase"
              style={{
                transform: `scale(${aboutMeTitle})`,
                transformOrigin: 'left'
              }}
            >
              About me
            </h3>
            <p
              className="text-justify"
              style={{
                opacity: `${aboutMeDetails}`
              }}
            >
              {resumeForm?.short_description}
            </p>
          </div>
        </div>
      </AbsoluteFill>
    </>
  )
}

export default AboutMe
