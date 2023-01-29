import { NextPage } from 'next'
import PlayerWrapper from '@/components/Video/Player/Wrapper'
import { useContext, useEffect } from 'react'
import { VideoPlayerContext } from '@/context/VideoPlayerContext'
import ResumeForm from '@/components/Pages/Video/ResumeForm'

const Video: NextPage = () => {
  /**
   * VIDE PLAYER CONTEXT
   */
  const { showPlayer, resetForm } = useContext(VideoPlayerContext)

  useEffect(() => {
    return () => {
      resetForm()
    }
  }, [])

  return (
    <section className="h-screen flex items-center justify-center bg-primary bg-opacity-[10%] overflow-auto">
      {showPlayer ? <PlayerWrapper /> : <ResumeForm />}
    </section>
  )
}

export default Video
